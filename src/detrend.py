from typing import Callable
from sklearn.linear_model import LinearRegression
from statsmodels.tsa.deterministic import DeterministicProcess
from scipy import interpolate
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


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
        y_original = self.y_original
        y_fitted = self.fitted_values
        y_detrend = self.y_predict
        fitted_parameters = self.fitted_parameters

        _, axs = plt.subplots(2, 1, figsize=(20, 15), gridspec_kw={"hspace": 0.35})
        # main plot
        if fitted_parameters is None:
            plt.suptitle(f"Visual summary of detrending using {self.method_name}")
        else:
            parameters_string = "\n".join(
                f"{key}: {value}" for key, value in fitted_parameters.items()
            )
            plt.suptitle(
                f"Visual summary of detrending using {self.method_name} with\n{parameters_string}"
            )

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
