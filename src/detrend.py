from sklearn.linear_model import LinearRegression
from statsmodels.tsa.deterministic import DeterministicProcess
from scipy import interpolate
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


class detrend:
    def _LinearRegression(self, y: np.ndarray | pd.DataFrame) -> np.ndarray:
        """
        returns fitted values with the simple linear regression method
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

        return y_predict

    def _PolynomialRegression(self, y: np.ndarray | pd.DataFrame) -> np.ndarray:
        """
        returns fitted values with the segmented polynomial regression method
        """
        # Choix de l'ordre de la régression et du nombre de segments
        order = self.poly_order
        n_segments = self.n_segments

        # Create deterministic process (X)
        dp = DeterministicProcess(
            index=np.arange(len(y)),  # dates from the training data
            constant=True,  # dummy feature for the bias (y_intercept)
            order=order,  # order of the time dummy (trend)
            drop=False,  # drop terms if necessary to avoid collinearity
        )

        # `in_sample` creates features for the dates given in the `index` argument
        X_dp = dp.in_sample()

        # Convert data
        X = np.array(X_dp)
        y = np.array(y)

        # Create segments
        segment_length = len(y) // n_segments
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

        return y_pred_segments

    def _LinearMA(self, y: np.ndarray | pd.DataFrame) -> np.ndarray:
        """
        returns fitted values with the linear centered mobile average method
        """
        window = self.window
        linear_MA = (
            pd.DataFrame(y).rolling(center=True, window=window, min_periods=1).mean()
        )
        return linear_MA

    def _ExponentialMA(self, y: np.ndarray | pd.DataFrame) -> np.ndarray:
        """
        returns fitted values with the exponential mobile average method
        """
        alpha = self.alpha
        expo_MA = pd.DataFrame(y).ewm(alpha=alpha, adjust=False).mean()
        return expo_MA

    def _BSplines(self, y: np.ndarray | pd.DataFrame) -> np.ndarray:
        """
        returns fitted values with the BSplines interpolation method
        """
        smoothing_factor = self.smoothing_factor
        degree = self.degree

        # Define x and y
        x = np.arange(len(y))  # time dummy, x
        y = np.array(y)  # price, f(x)

        # Define t the vector of knots,
        # c the B-splines coefficients
        # and k the degree of the splines
        t, c, k = interpolate.splrep(
            x, y, s=smoothing_factor, k=degree
        )  # s: smoothing factor

        # Interpolate the prices
        spline = interpolate.BSpline(t, c, k, extrapolate=False)
        y_interpolate = spline(x)

        return y_interpolate

    def __init__(
        self,
        method: str = "LinearRegression",
        poly_order: int = 2,
        n_segments: int = 5,
        window: int = 100,
        alpha: float = 0.05,
        bsplines_factors: tuple = (10, 3),
    ) -> None:
        methods = {
            "LinearRegression": self._LinearRegression,
            "PolynomialRegression": self._PolynomialRegression,
            "LinearMA": self._LinearMA,
            "BSplines": self._BSplines,
            "ExponentialMA": self._ExponentialMA,
        }
        self.method_name = method
        self.method = methods[method]
        self.poly_order = poly_order
        self.n_segments = n_segments
        self.window = window
        self.alpha = alpha
        self.smoothing_factor, self.degree = bsplines_factors

    def fit(self, y: np.ndarray | pd.DataFrame) -> np.ndarray:
        """_summary_

        Args:
            y (np.ndarray): time series 1 dimensional array

        Returns:
            np.ndarray: fitted values, 1 dimensional array of length len(y)
        """
        self.y_original = y
        fitted_values = self.method(self.y_original)
        self.fitted_values = np.array(fitted_values).ravel()
        return self.fitted_values

    def predict(self) -> np.ndarray:
        """_summary_

        Returns:
            np.ndarray: detrended values, 1 dimensional array of length len(y)
        """
        self.y_predict = self.y_original - self.fitted_values
        return self.y_predict

    def fancy_plot(self, xticklabels=None) -> None:
        y_original = self.y_original
        y_fitted = self.fitted_values
        y_detrend = self.y_predict

        _, axs = plt.subplots(2, 1, figsize=(20, 15), gridspec_kw={"hspace": 0.35})
        # main plot
        plt.suptitle(f"Visual summary of detrending using {self.method_name}")

        # first plot
        axs[0].plot(np.arange(len(y_original)), y_original, label="Original price")
        axs[0].plot(np.arange(len(y_original)), y_fitted, label="Trend")
        axs[0].set_title("Orignal time series with fitted trend curve")
        axs[0].set_xlabel("Date")
        axs[0].set_ylabel("Price")
        axs[0].legend()
        if xticklabels is not None:
            axs[0].set_xticklabels(xticklabels)

        # second plot
        axs[1].plot(np.arange(len(y_original)), y_detrend)
        axs[1].set_title("Time series without trend")
        axs[1].set_xlabel("Date")
        axs[1].set_ylabel("Price fluctuation")
        if xticklabels is not None:
            axs[1].set_xticklabels(xticklabels)
