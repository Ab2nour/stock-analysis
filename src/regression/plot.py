"""Regression plots."""

import matplotlib.pyplot as plt
import pandas as pd
from numpy.typing import ArrayLike


def true_vs_prediction(
    true: pd.Series,
    prediction: ArrayLike,
    title: str = "True data vs prediction",
    true_label: str = "True data",
    prediction_label: str = "Prediction",
) -> plt.Figure:
    fig = plt.figure()
    prediction_df = pd.DataFrame(prediction)
    prediction_df.index = true.index

    plt.title(title)
    plt.plot(true, label=true_label)
    plt.plot(prediction_df, label=prediction_label)

    plt.legend()
    _ = plt.xticks(rotation=45, ha="right")

    return fig
