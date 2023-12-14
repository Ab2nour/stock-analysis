import os

import pandas as pd

from src.functions.detrend import LinearMADetrend
from src.utils import go_to_root_folder

if __name__ == "__main__":
    go_to_root_folder()
    # Specify detrend model and directory in which save processed data
    detrend_model = LinearMADetrend(window=200)
    model_name: str = "LinearMADetrend"
    model_options: str = "window-200"  # format: option1-value_option2-value
    # todo: model options should be deduced automatically from REAL options
    processed_data_folder = (
        f"data/processed_data/detrend_data/{model_name}/{model_options}"
    )

    # Gather files to process
    data_folder = "data/raw_data"
    filenames = [f for f in os.listdir(data_folder) if f.endswith(".csv")]

    # Read files
    data_files: dict = {
        filename: pd.read_csv(
            f"{data_folder}/{filename}", parse_dates=["Date"], index_col="Date"
        )
        for filename in filenames
    }

    # Detrend files
    for data in data_files.values():
        # fit the model using the close price (arbitrary)
        close_price = data["Close"]
        detrend_model.fit(close_price)

        for data_type in data.columns[
            :-1
        ]:  # data_type = Open / High etc. EXCEPT Volume
            # load time series
            y = data[data_type]
            # detrend time series
            y_predict = detrend_model.predict(y)
            # overwrite original time series
            data[data_type] = y_predict

    # Write processed files
    os.makedirs(processed_data_folder, exist_ok=True)  # Create folder if needed

    for stock_name, detrend_data in zip(data_files.keys(), data_files.values()):
        detrend_data.to_csv(f"{processed_data_folder}/{stock_name}")
