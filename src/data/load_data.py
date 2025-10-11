"""Data loading."""

import pandas as pd

from src.utils.constants import data_folder


def load_stock_data(stock_name: str) -> pd.DataFrame:
    """Load stock data.

    >>> stock_data = load_stock_data("AAPL")
    """
    stock_data = pd.read_csv(
        f"{data_folder}/raw/{stock_name}.csv", parse_dates=["Date"], index_col="Date"
    )
    return stock_data


def load_sample_data() -> pd.DataFrame:
    """Load sample data.

    >>> sample_data = load_sample_data()
    """
    sample_data = load_stock_data("AAPL")
    return sample_data


def load_processed_data(stock_name: str, process_method: str) -> pd.DataFrame:
    """Load processed data.

    >>> stock_data = load_processed_data("AAPL", "detrend/LinearMADetrend/window-100")
    """
    processed_data = pd.read_csv(
        f"{data_folder}/processed/{process_method}/{stock_name}.csv",
        parse_dates=["Date"],
        index_col="Date",
    )
    return processed_data
