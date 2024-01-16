import matplotlib
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns


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
            X (pd.DataFrame): Dataframe containing freq and period indexes and variable to plot y.
            y (str): Column name of variable to plot.
            period (str): Period index.
            freq (str): Freq index.
            ax (matplotlib.axes._axes.Axes, optional): Matplotlib axe. Defaults to None.

        Returns:
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
        >>>    X=df_detrend_seasonality, y="Close", period="year", freq="dayofyear", ax=ax
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
        for line, name in zip(ax.lines, X[period].unique()):
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
