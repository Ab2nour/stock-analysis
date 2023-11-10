import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


def _fancy_plot(
    y_original: np.ndarray | pd.DataFrame,
    y_fitted: np.ndarray,
    y_detrend: np.ndarray,
    fitted_parameters: dict,
    xticklabels: pd.core.indexes.base.Index | None = None,
    method_name: str = "",
) -> None:
    """Plot two graphs: the original data and its fitted trend curve; the detrended data

    Args:
        xticklabels (pd.core.indexes.base.Index | None, optional): the date index of the imported
        financial data. Defaults to None.
    """
    _, axs = plt.subplots(2, 1, figsize=(20, 15), gridspec_kw={"hspace": 0.35})
    # main plot
    if fitted_parameters is None:
        plt.suptitle(f"Visual summary of detrending using {method_name}")
    else:
        parameters_string = "\n".join(
            f"{key}: {value}" for key, value in fitted_parameters.items()
        )
        plt.suptitle(
            f"Visual summary of detrending using {method_name} with\n{parameters_string}"
        )

    # first plot
    axs[0].plot(np.arange(len(y_original)), y_original, label="Original price")
    axs[0].plot(np.arange(len(y_original)), y_fitted, label="Trend")
    axs[0].set_title("Orignal time series with fitted trend curve")
    axs[0].set_xlabel("Date")
    axs[0].set_ylabel("Price")
    axs[0].legend()
    if xticklabels is not None:
        axs[0].set_xticklabels(xticklabels)

    # second plot
    axs[1].plot(np.arange(len(y_original)), y_detrend)
    axs[1].set_title("Time series without trend")
    axs[1].set_xlabel("Date")
    axs[1].set_ylabel("Price fluctuation")
    if xticklabels is not None:
        axs[1].set_xticklabels(xticklabels)
