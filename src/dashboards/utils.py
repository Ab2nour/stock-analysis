"""Helper functions common to all dashboards."""

import base64
import io

import matplotlib
import matplotlib.pyplot as plt


def matplotlib_init_for_dash() -> None:
    """Run this before using Matplotlib with Dash.

    It fixes a crash:
        "Starting a Matplotlib GUI outside of the main thread will likely fail"

    See this:
        https://stackoverflow.com/questions/69924881/userwarning-starting-a-matplotlib-gui-outside-of-the-main-thread-will-likely-fa
    """
    #
    matplotlib.use("agg")


def plt_dash() -> str:
    """Helper function to plot Matplotlib graphs in Dash dashboards.

    Example
    -------
    >>> plt.scatter([1, 2, 3], [2, 4, 6])  # your plot
    >>> plt.title("Title of the plot")  # you can add anything on it
    >>> data = plt_dash()

    And then, your Dash function should return the `data` variable.
    """
    buf = io.BytesIO()  # in-memory files
    plt.savefig(buf, format="png")
    plt.close()

    data = base64.b64encode(buf.getbuffer()).decode("utf8")  # encode to html elements
    buf.close()
    base64_encoded_image = f"data:image/png;base64,{data}"

    return base64_encoded_image
