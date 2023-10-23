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
