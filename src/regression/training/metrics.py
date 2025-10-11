import pandas as pd
from sklearn.metrics import mean_absolute_error, root_mean_squared_error


def compute_metrics(y_true: pd.Series, y_pred: pd.Series) -> tuple[float, ...]:
    mae = mean_absolute_error(y_true=y_true, y_pred=y_pred)
    rmse = root_mean_squared_error(y_true=y_true, y_pred=y_pred)

    return mae, rmse
