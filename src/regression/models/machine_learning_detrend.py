"""Machine learning models on de-trended data."""

from typing import TypeAlias

from numpy.typing import ArrayLike
from sklearn.ensemble import ExtraTreesRegressor
from sklearn.linear_model import LinearRegression
from xgboost import XGBRegressor

MLRegressor: TypeAlias = XGBRegressor | ExtraTreesRegressor
DetrendRegressor: TypeAlias = LinearRegression


def detrend_prediction(
    model: MLRegressor, regressor: LinearRegression, x: ArrayLike
) -> ArrayLike:
    lr_predict = regressor.predict(x).reshape(-1, 1)
    y_pred = model.predict(x).reshape(-1, 1)

    return y_pred + lr_predict
