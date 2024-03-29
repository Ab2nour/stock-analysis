"""Detrend models."""
import numpy as np
import pandas as pd
from scipy import interpolate
from sklearn.linear_model import LinearRegression
from statsmodels.tsa.deterministic import DeterministicProcess

from src.functions.detrend_fancy_plot import _fancy_plot


class BaseDetrend:
    """Base class for all detrend models."""

    def __init__(self, method_name: str) -> None:
        self.y_predict: np.ndarray = np.array([])
        self.y_original: np.ndarray = np.array([])
        self.fitted_values: np.ndarray = np.array([])
        self.fitted_parameters: dict[str, [int | float]] = {}
        self.method_name: str = method_name

    def predict(self, y: np.ndarray) -> np.ndarray:
        """_summary_

        Args:
            y (np.ndarray): 1 dimensional array of same length as y_original

        Returns:
            np.ndarray: detrended values, 1 dimensional array of length len(y)
        """
        self.y_predict = y - self.fitted_values
        return self.y_predict

    def fancy_plot(self, xticklabels: pd.core.indexes.base.Index | None = None) -> None:
        """Plot two graphs:

        1. the original data and its fitted trend curve;
        2. the detrended data

        Args:
            xticklabels (pd.core.indexes.base.Index | None, optional):
                the date index of the imported financial data. Defaults to None.
        """
        _fancy_plot(
            y_original=self.y_original,
            y_fitted=self.fitted_values,
            y_detrend=self.y_predict,
            fitted_parameters=self.fitted_parameters,
            xticklabels=xticklabels,
            method_name=self.method_name,
        )


class LinearRegressionDetrend(BaseDetrend):
    def __init__(self) -> None:
        super().__init__("linear regression")

    def fit(self, y: np.ndarray | pd.DataFrame) -> np.ndarray:
        """_summary_

        Args:
            y (np.ndarray): time series 1 dimensional array
        """
        # Create deterministic process (X)
        dp = DeterministicProcess(
            index=np.arange(len(y)),  # dates from the training data
            constant=True,  # dummy feature for the bias (y_intercept)
            order=1,  # order of the time dummy (trend)
            drop=False,  # drop terms if necessary to avoid collinearity
        )

        # `in_sample` creates features for the dates given in the `index` argument
        X_dp = dp.in_sample()

        # Convert data and fit the linear regression
        X = np.array(X_dp)
        y = np.array(y)
        model = LinearRegression()
        model.fit(X, y)
        y_predict = model.predict(X)

        self.y_original = y
        self.fitted_values = np.array(y_predict).ravel()


class PolynomialRegressionDetrend(BaseDetrend):
    def __init__(self, order: int = 3, n_segments: int = 5) -> None:
        super().__init__("polynomial regression")
        self.fitted_parameters = {
            "Polynomial order": order,
            "Number of segments": n_segments,
        }
        self.order = order
        self.n_segments = n_segments

    def fit(self, y: np.ndarray | pd.DataFrame) -> np.ndarray:
        """_summary_

        Args:
            y (np.ndarray): time series 1 dimensional array
        """
        # Create deterministic process (X)
        dp = DeterministicProcess(
            index=np.arange(len(y)),  # dates from the training data
            constant=True,  # dummy feature for the bias (y_intercept)
            order=self.order,  # order of the time dummy (trend)
            drop=False,  # drop terms if necessary to avoid collinearity
        )

        # `in_sample` creates features for the dates given in the `index` argument
        X_dp = dp.in_sample()

        # Convert data
        X = np.array(X_dp)
        y = np.array(y)

        # Create segments
        segment_length = len(y) // self.n_segments
        y_segments = [
            y[i : i + segment_length] for i in range(0, len(y), segment_length)
        ]
        X_segments = [
            X[i : i + segment_length, :] for i in range(0, len(y), segment_length)
        ]

        # Fit and predict for each segment
        y_pred_segments = np.array([])
        for X_segment, y_segment in zip(X_segments, y_segments):
            model = LinearRegression()
            model.fit(X_segment, y_segment)
            y_pred_segment = model.predict(X_segment)
            y_pred_segments = np.append(y_pred_segments, y_pred_segment)

        self.y_original = y
        self.fitted_values = np.array(y_pred_segments).ravel()


class LinearMADetrend(BaseDetrend):
    def __init__(self, window: int = 100) -> None:
        super().__init__("linear mobile average")
        self.fitted_parameters = {"Time span": window}
        self.window = window

    def fit(self, y: np.ndarray | pd.DataFrame) -> np.ndarray:
        """
        Returns fitted values with the linear mobile average method
        """
        linear_MA = (
            pd.DataFrame(y)
            .rolling(center=True, window=self.window, min_periods=1)
            .mean()
        )

        self.y_original = y
        self.fitted_values = np.array(linear_MA).ravel()


class ExponentialMADetrend(BaseDetrend):
    def __init__(self, alpha: float = 0.05) -> None:
        super().__init__("exponential mobile average")
        self.fitted_parameters = {"Alpha": alpha}
        self.alpha = alpha

    def fit(self, y: np.ndarray | pd.DataFrame) -> np.ndarray:
        """
        Returns fitted values with the exponential mobile average method
        """
        expo_MA = pd.DataFrame(y).ewm(alpha=self.alpha, adjust=False).mean()

        self.y_original = y
        self.fitted_values = np.array(expo_MA).ravel()


class BSplinesDetrend(BaseDetrend):
    def __init__(self, interval_length: int = 10, degree: int = 3) -> None:
        super().__init__("B-splines")
        self.fitted_parameters = {
            "Interval length": interval_length,
            "Degree": degree,
        }
        self.interval_length = interval_length
        self.degree = degree

    def fit(self, y: np.ndarray | pd.DataFrame) -> None:
        """Fit BSplines to price series

        Args:
            y (np.ndarray | pd.DataFrame): Price series
        """
        # Define time index starting from 0
        time_index = np.arange(len(y))
        # Define knots and corresponding price
        knots = np.arange(0, len(y), self.interval_length)
        price_series = np.array(y)
        knots_price = price_series[knots]

        # Define t, c, k parameters of scipy interpolate function
        t, c, k = interpolate.splrep(x=knots, y=knots_price, k=self.degree)

        # Interpolate the prices
        spline = interpolate.BSpline(t, c, k)
        y_interpolate = spline(time_index)

        self.y_original = y
        self.fitted_values = np.array(y_interpolate).ravel()
