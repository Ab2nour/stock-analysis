import os
import sys

import pandas as pd

sys.path.append("./src/functions")
from detrend import LinearMA  # noqa: E402

# SPECIFY DETREND MODEL AND DIRECTORY IN WHICH SAVE PROCESSED DATA

detrend_model = LinearMA(window=200)
model_name: str = "LinearMA"
model_options: str = "window-201"  # format: option1-value_option2-value
processed_data_folder = f"data/processed_data/detrend_data/{model_name}/{model_options}"


# GATHER FILES TO PROCESS

data_folder = "data/raw_data"
filenames = [f for f in os.listdir(data_folder) if f.endswith(".csv")]

# READ FILES

data_files: dict = {
    filename: pd.read_csv(
        f"{data_folder}/{filename}", parse_dates=["Date"], index_col="Date"
    )
    for filename in filenames
}

# DETREND FILES

for data in data_files.values():
    # fit the model using the close price (arbitrary)
    close_price = data["Close"]
    detrend_model.fit(close_price)

    for data_type in data.columns[:-1]:  # data_type = Open / High etc. EXCEPT Volume
        # load time series
        y = data[data_type]
        # detrend time series
        y_predict = detrend_model.predict(y)
        # overwrite original time series
        data[data_type] = y_predict

# WRITE PROCESSED FILES

os.makedirs(processed_data_folder, exist_ok=True)  # Create folder if needed

for stock_name, detrend_data in zip(data_files.keys(), data_files.values()):
    detrend_data.to_csv(f"{processed_data_folder}/{stock_name}")
