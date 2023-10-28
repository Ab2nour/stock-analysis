import pandas as pd
import os

os.chdir("src")
try:
    from detrend import LinearReg, PolynomialRegression, LinearMA
except ModuleNotFoundError as error:
    print(error)
    exit()

### INSURE YOU ARE IN SOURCE DIRECTORY FOR OS MODULE

os.chdir("..")
print(os.getcwd())

### SPECIFY DETREND MODEL AND DIRECTORY IN WHICH SAVE PROCESSED DATA

detrend_model = LinearMA(window=200)
model_name: str = "LinearMA"
model_options: str = "window-200"
processed_data_folder = f"data/detrend_data/{model_name}/{model_options}"


### GATHER FILES TO PROCESS

data_folder = "data"
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

### WRITE PROCESSED FILES

os.makedirs(processed_data_folder, exist_ok=True)  # Create folder if needed

for stock_name, detrend_data in zip(data_files.keys(), data_files.values()):
    detrend_data.to_csv(f"{processed_data_folder}/{stock_name}")
