from typing import Callable
from sklearn.linear_model import LinearRegression
from statsmodels.tsa.deterministic import DeterministicProcess
from scipy import interpolate
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from detrend_fancy_plot import _fancy_plot


class LinearReg:
    def __init__(self) -> None:
        self.fitted_parameters = None  # for further implementation
        self.method_name = "linear regression"

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

    def predict(self) -> np.ndarray:
        """_summary_

        Returns:
            np.ndarray: detrended values, 1 dimensional array of length len(y)
        """
        self.y_predict = self.y_original - self.fitted_values
        return self.y_predict

    def fancy_plot(self, xticklabels: pd.core.indexes.base.Index | None = None) -> None:
        """plot two graphs : the original data and its fitted trend curve ; the detrended data

        Args:
            xticklabels (pd.core.indexes.base.Index | None, optional): the date index of the imported
            financial data. Defaults to None.
        """
        _fancy_plot(
            y_original=self.y_original,
            y_fitted=self.fitted_values,
            y_detrend=self.y_predict,
            fitted_parameters=self.fitted_parameters,
            xticklabels=xticklabels,
            method_name=self.method_name,
        )


class PolynomialRegression:
    def __init__(self, order: int = 3, n_segments: int = 5) -> None:
        self.fitted_parameters = {
            "Polynomial order": order,
            "Number of segments": n_segments,
        }
        self.order = order
        self.n_segments = n_segments
        self.method_name = "polynomial regression"

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

    def predict(self) -> np.ndarray:
        """_summary_

        Returns:
            np.ndarray: detrended values, 1 dimensional array of length len(y)
        """
        self.y_predict = self.y_original - self.fitted_values
        return self.y_predict

    def fancy_plot(self, xticklabels: pd.core.indexes.base.Index | None = None) -> None:
        """plot two graphs : the original data and its fitted trend curve ; the detrended data

        Args:
            xticklabels (pd.core.indexes.base.Index | None, optional): the date index of the imported
            financial data. Defaults to None.
        """
        _fancy_plot(
            y_original=self.y_original,
            y_fitted=self.fitted_values,
            y_detrend=self.y_predict,
            fitted_parameters=self.fitted_parameters,
            xticklabels=xticklabels,
            method_name=self.method_name,
        )


class LinearMA:
    def __init__(self, window: int = 100) -> None:
        self.fitted_parameters = {"Time span": window}
        self.window = window
        self.method_name = "linear mobile average"

    def fit(self, y: np.ndarray | pd.DataFrame) -> np.ndarray:
        """
        returns fitted values with the linear mobile average method
        """
        linear_MA = (
            pd.DataFrame(y)
            .rolling(center=True, window=self.window, min_periods=1)
            .mean()
        )

        self.y_original = y
        self.fitted_values = np.array(linear_MA).ravel()

    def predict(self) -> np.ndarray:
        """_summary_

        Returns:
            np.ndarray: detrended values, 1 dimensional array of length len(y)
        """
        self.y_predict = self.y_original - self.fitted_values
        return self.y_predict

    def fancy_plot(self, xticklabels: pd.core.indexes.base.Index | None = None) -> None:
        """plot two graphs : the original data and its fitted trend curve ; the detrended data

        Args:
            xticklabels (pd.core.indexes.base.Index | None, optional): the date index of the imported
            financial data. Defaults to None.
        """
        _fancy_plot(
            y_original=self.y_original,
            y_fitted=self.fitted_values,
            y_detrend=self.y_predict,
            fitted_parameters=self.fitted_parameters,
            xticklabels=xticklabels,
            method_name=self.method_name,
        )


class ExponentialMA:
    def __init__(self, alpha: float = 0.05) -> None:
        self.fitted_parameters = {"Alpha": alpha}
        self.alpha = alpha
        self.method_name = "exponential mobile average"

    def fit(self, y: np.ndarray | pd.DataFrame) -> np.ndarray:
        """
        returns fitted values with the exponential mobile average method
        """
        expo_MA = pd.DataFrame(y).ewm(alpha=self.alpha, adjust=False).mean()

        self.y_original = y
        self.fitted_values = np.array(expo_MA).ravel()

    def predict(self) -> np.ndarray:
        """_summary_

        Returns:
            np.ndarray: detrended values, 1 dimensional array of length len(y)
        """
        self.y_predict = self.y_original - self.fitted_values
        return self.y_predict

    def fancy_plot(self, xticklabels: pd.core.indexes.base.Index | None = None) -> None:
        """plot two graphs : the original data and its fitted trend curve ; the detrended data

        Args:
            xticklabels (pd.core.indexes.base.Index | None, optional): the date index of the imported
            financial data. Defaults to None.
        """
        _fancy_plot(
            y_original=self.y_original,
            y_fitted=self.fitted_values,
            y_detrend=self.y_predict,
            fitted_parameters=self.fitted_parameters,
            xticklabels=xticklabels,
            method_name=self.method_name,
        )


class BSplines:
    def __init__(self, smoothing_factor: int = 10, degree: int = 3) -> None:
        self.fitted_parameters = {
            "Smoothing factor": smoothing_factor,
            "Degree": degree,
        }
        self.smoothing_factor = smoothing_factor
        self.degree = degree
        self.method_name = "B-splines"

    def fit(self, y: np.ndarray | pd.DataFrame) -> np.ndarray:
        """
        returns fitted values with the B-splines method
        """
        # Define x and y
        time_dummy = np.arange(len(y))
        price = np.array(y)

        # Define t the vector of knots,
        # c the B-splines coefficients
        # and k the degree of the splines
        t, c, k = interpolate.splrep(
            x=time_dummy, y=price, s=self.smoothing_factor, k=self.degree
        )

        # Interpolate the prices
        spline = interpolate.BSpline(t, c, k, extrapolate=False)
        y_interpolate = spline(time_dummy)

        self.y_original = y
        self.fitted_values = np.array(y_interpolate).ravel()

    def predict(self) -> np.ndarray:
        """_summary_

        Returns:
            np.ndarray: detrended values, 1 dimensional array of length len(y)
        """
        self.y_predict = self.y_original - self.fitted_values
        return self.y_predict

    def fancy_plot(self, xticklabels: pd.core.indexes.base.Index | None = None) -> None:
        """plot two graphs : the original data and its fitted trend curve ; the detrended data

        Args:
            xticklabels (pd.core.indexes.base.Index | None, optional): the date index of the imported
            financial data. Defaults to None.
        """
        _fancy_plot(
            y_original=self.y_original,
            y_fitted=self.fitted_values,
            y_detrend=self.y_predict,
            fitted_parameters=self.fitted_parameters,
            xticklabels=xticklabels,
            method_name=self.method_name,
        )