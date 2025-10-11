import pandas as pd
from statsmodels.tsa.statespace.sarimax import SARIMAX

arima_parameters = 10, 0, 10
seasonal_order = 0, 0, 0, 0

def sarimax(data: pd.Series):
    return SARIMAX(data, order=arima_parameters, seasonal_order=seasonal_order)
