from dash import Dash, html, dcc, callback, Output, Input
import plotly.express as px
import pandas as pd
import plotly.graph_objects as go

data_folder = "data"

stocks_names = ("AAPL", "MSFT", "TSLA",)

stocks = {}

for stock_name in stocks_names:
    stocks[stock_name] = pd.read_csv(
        f"{data_folder}/{stock_name}.csv", parse_dates=["Date"], index_col="Date"
    )

title = "Dashboard séries chronologiques"

app = Dash(__name__)
app.title = "Séries chronologiques"

app.layout = html.Div([
    html.H1(children=title, style={'textAlign': 'center'}),
    dcc.Dropdown(stocks_names, stocks_names[0], id='dropdown-selection'),
    dcc.Graph(id='stock-candlestick-plot'),
    dcc.Graph(id='stock-line-plot')
])


@callback(
    Output('stock-candlestick-plot', 'figure'),
    Input('dropdown-selection', 'value')
)
def update_candlestick(value: str):
    df = stocks[value]
    fig_title = f"Cours de l'action {value}"  # todo: plot title figure

    fig = go.Figure(data=[
        go.Candlestick(
            x=df.index,
            open=df['Open'],
            high=df['High'],
            low=df['Low'],
            close=df['Close'],
        )
    ])

    fig.update_layout(xaxis_rangeslider_visible=False)
    return fig


@callback(
    Output('stock-line-plot', 'figure'),
    Input('dropdown-selection', 'value')
)
def update_line_plot(value: str):
    df = stocks[value]
    return px.line(df, y=["Open", "High", "Low", "Close"])


if __name__ == '__main__':
    app.run(debug=True)
