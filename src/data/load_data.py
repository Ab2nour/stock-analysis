"""Data loading."""

import pandas as pd
from src.utils.constants import data_folder


def load_sample_data() -> pd.DataFrame:
    """Load sample data.

    >>> sample_data = load_sample_data()
    """
    sample_data = pd.read_parquet(
        f"{data_folder}/raw/sample-uniform-distribution.parquet", engine="pyarrow"
    )
    return sample_data
