import pandas as pd
import os
from detrend import LinearReg, PolynomialRegression, LinearMA


### SPECIFY DETREND MODEL AND SUFFIX TO APPLY TO PROCESSED FILENAME

detrend_model = LinearMA(window=100)
model_name: str = "linearMA_window-100"

### GATHER FILES TO PROCESS

data_folder = "../data"
filenames = [f for f in os.listdir(data_folder) if f.endswith(".csv")]

### READ FILES

data_files: dict = {
    filename: pd.read_csv(
        f"{data_folder}/{filename}", parse_dates=["Date"], index_col="Date"
    )
    for filename in filenames
}

### DETREND FILES

for stock_name, data in zip(data_files.keys(), data_files.values()):
    for data_type in data.columns[:-1]:  # data_type = Open / High etc. EXCEPT Volume
        print(data_type)
        # load time series
        y = data[data_type]
        # detrend time series
        detrend_model.fit(y)
        y_predict = detrend_model.predict()
        # overwrite original time series
        data[data_type] = y_predict

### WRITE PROCESSED FILES

processed_data_folder = "../data/detrend_data"
try:
    os.mkdir(processed_data_folder)  # Create folder if needed
except:
    pass  # Else do nothing

for stock_name, detrend_data in zip(data_files.keys(), data_files.values()):
    processed_filename = (
        f"{stock_name[:-3]}_detrend_{model_name}.csv"  # delete ".csv" in stock_name
    )
    detrend_data.to_csv(f"{processed_data_folder}/{processed_filename}")
