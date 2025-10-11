import matplotlib
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
from statsmodels.tsa.stattools import adfuller


class SeasonalPlotter:
    def __init__(self) -> None:
        pass

    # Funtion got from
    # https://github.com/Kaggle/learntools/blob/master/learntools/time_series/utils.py
    def seasonal_plot(
        X: pd.DataFrame,
        y: str,
        period: str,
        freq: str,
        ax: matplotlib.axes._axes.Axes = None,
    ) -> matplotlib.axes._axes.Axes:
        """Plot resampled data based on frequency and broken down by periods.

        Args:
            X (pd.DataFrame): Dataframe containing freq and period
            indexes and variable to plot y.
            y (str): Column name of variable to plot.
            period (str): Period index.
            freq (str): Freq index.
            ax (matplotlib.axes._axes.Axes, optional): Matplotlib axe. Defaults to None.

        Returns
        -------
            matplotlib.axes._axes.Axes: Matplotlib axe.

        Examples
        --------
        >>> df_detrend_seasonality = df_detrend.copy()

        >>> # Adapt index for function
        >>> df_detrend_seasonality.index = df_detrend_seasonality.index.to_period("D")

        >>> # Define indexes
        >>> df_detrend_seasonality["weekofyear"] = df_detrend_seasonality.index.week
        >>> df_detrend_seasonality["dayofyear"] = df_detrend_seasonality.index.dayofyear
        >>> df_detrend_seasonality["year"] = df_detrend_seasonality.index.year

        >>> _, ax = plt.subplots(figsize=(12, 6))
        >>> seasonal_plot(
        >>>    X=df_detrend_seasonality,
        >>>    y="Close",
        >>>    period="year",
        >>>    freq="dayofyear",
        >>>    ax=ax
        >>> )
        """
        if ax is None:
            _, ax = plt.subplots()
        palette = sns.color_palette(
            "husl",
            n_colors=X[period].nunique(),
        )
        ax = sns.lineplot(
            x=freq,
            y=y,
            hue=period,
            data=X,
            ci=False,
            ax=ax,
            palette=palette,
            legend=False,
        )
        ax.set_title(f"Seasonal Plot ({period}/{freq})")
        for line, name in zip(ax.lines, X[period].unique(), strict=False):
            y_ = line.get_ydata()[-1]
            ax.annotate(
                name,
                xy=(1, y_),
                xytext=(6, 0),
                color=line.get_color(),
                xycoords=ax.get_yaxis_transform(),
                textcoords="offset points",
                size=14,
                va="center",
            )
        return ax

    # Function got from
    # https://github.com/Kaggle/learntools/blob/master/learntools/time_series/utils.py
    def plot_periodogram(
        time_series: pd.Series,
        detrend: str | bool = False,
        ax: matplotlib.axes._axes.Axes = None,
    ) -> matplotlib.axes._axes.Axes:
        """Plot periodogram for time series data.

        Args:
            time_series (pd.Series): Times series data.
            detrend (str | bool, optional): Specify detrend method
            if desired, False otherwise.
            Defaults to False.
            ax (matplotlib.axes._axes.Axes, optional): Matplotlib axe. Defaults to None.

        Returns
        -------
            matplotlib.axes._axes.Axes: Matplotlib axe of plotted periodogram

        Examples
        --------
        >>> plot_periodogram(time_series=df_detrend["Close"], detrend=False)
        """
        from scipy.signal import periodogram

        fs = pd.Timedelta("365D") / pd.Timedelta("1D")

        freqencies, spectrum = periodogram(
            time_series,
            fs=fs,
            detrend=detrend,
            window="boxcar",
            scaling="spectrum",
        )

        if ax is None:
            _, ax = plt.subplots(figsize=(16, 8))

        ax.step(freqencies, spectrum, color="purple")

        ax.set_xscale("log")

        ax.set_xticks([1, 2, 4, 6, 12, 26, 52, 104])

        ax.set_xticklabels(
            [
                "Annual (1)",
                "Semiannual (2)",
                "Quarterly (4)",
                "Bimonthly (6)",
                "Monthly (12)",
                "Biweekly (26)",
                "Weekly (52)",
                "Semiweekly (104)",
            ],
            rotation=30,
        )

        ax.ticklabel_format(axis="y", style="sci", scilimits=(0, 0))

        ax.set_ylabel("Variance")

        ax.set_title("Periodogram")

        return ax


def check_stationarity_and_difference(
    ts: pd.Series, max_diff: int = 5, significance_level: float = 0.05
) -> tuple:
    """Iteratively applies differencing and checks stationarity
    until the series becomes stationary.

    Parameters
    ----------
    - ts: Time series data (pandas Series).
    - max_diff: Maximum number of differencing steps to attempt.
    - significance_level: Significance level for the stationarity test.

    Returns
    -------
    - Differenced series, number of differencing steps,
    and p-value of the stationarity test.
    """
    # Initializations
    diff_count = 0
    p_value = (
        significance_level + 1
    )  # Set initial p-value higher than the significance level

    while p_value > significance_level and diff_count < max_diff:
        # Apply differencing
        ts_diff = ts.diff().dropna()

        # Perform stationarity test (Augmented Dickey-Fuller)
        _, p_value, _, _, _, _ = adfuller(ts_diff)

        # Update for the next iteration
        ts = ts_diff
        diff_count += 1

        # Print p-value
        print(
            f"pvalue for adfuller test on differencing order {diff_count} is {p_value}"
        )

    return ts_diff, diff_count, p_value
