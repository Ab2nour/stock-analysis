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
    html.Div(children=[
        dcc.Graph(id='stock-candlestick-plot', style={'display': 'inline-block'}),
        dcc.Graph(id='stock-line-plot', style={'display': 'inline-block'})
    ]),
    # dcc.Graph(id='stock-candlestick-plot'),
    # dcc.Graph(id='stock-line-plot')
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

    # Style below
    fig.update_layout(xaxis_rangeslider_visible=False)
    fig.update_layout(
        plot_bgcolor='white',  # background color
        width=900,  # figure width
        height=500,  # figure height
        margin=dict(r=20, t=20, b=10)  # remove white space
    )
    return fig


@callback(
    Output('stock-line-plot', 'figure'),
    Input('dropdown-selection', 'value')
)
def update_line_plot(value: str):
    df = stocks[value]
    fig = px.line(df, y=["Open", "High", "Low", "Close"])

    # Style below
    font_dict = dict(
        family='Arial',
        size=26,
        color='black'
    )  # general figure formatting
    fig.update_layout(
        font=font_dict,  # font formatting
        plot_bgcolor='white',  # background color
        width=900,  # figure width
        height=500,  # figure height
        margin=dict(r=20, t=20, b=10)  # remove white space
    )

    # x and y-axis formatting
    fig.update_yaxes(
        # title_text='Y-axis',  # axis label
        showline=True,  # add line at x=0
        linecolor='black',  # line color
        linewidth=2.4,  # line size
        ticks='outside',  # ticks outside axis
        tickfont=font_dict,  # tick label font
        mirror='allticks',  # add ticks to top/right axes
        tickwidth=2.4,  # tick width
        tickcolor='black',  # tick color

    )
    fig.update_xaxes(
        # title_text='X-axis',
        showline=True,
        showticklabels=True,
        linecolor='black',
        linewidth=2.4,
        ticks='outside',
        tickfont=font_dict,
        mirror='allticks',
        tickwidth=2.4,
        tickcolor='black',
    )

    return fig


if __name__ == '__main__':
    app.run(debug=True)