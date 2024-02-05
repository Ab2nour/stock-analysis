Search.setIndex({"docnames": ["README", "demo-notebooks/candlestick_chart_detrend_data", "demo-notebooks/detrend_class", "demo-notebooks/download-data", "docstring/dashboards", "docstring/functions", "docstring/modules", "docstring/notebooks", "how-to/code-quality", "how-to/create-documentation-website", "index", "notebooks/README", "notebooks/detrend", "notebooks/exploratory-data-analysis", "notebooks/prediction", "notebooks/seasonality"], "filenames": ["README.md", "demo-notebooks/candlestick_chart_detrend_data.ipynb", "demo-notebooks/detrend_class.ipynb", "demo-notebooks/download-data.ipynb", "docstring/dashboards.rst", "docstring/functions.rst", "docstring/modules.rst", "docstring/notebooks.rst", "how-to/code-quality.md", "how-to/create-documentation-website.md", "index.rst", "notebooks/README.md", "notebooks/detrend.ipynb", "notebooks/exploratory-data-analysis.ipynb", "notebooks/prediction.ipynb", "notebooks/seasonality.ipynb"], "titles": ["source folder", "How detrended data behave with candlestick chart", "How to use detrend classes", "How to download new stock data", "dashboards package", "functions package", "Stock Analysis", "notebooks package", "Code quality tutorials", "How to create documentation website", "Welcome to Stock Analysis\u2019s documentation!", "src/notebooks folder", "D\u00e9composition : tendance", "Analyse exploratoire", "Pr\u00e9diction du cours boursier", "D\u00e9composition : saisonnalit\u00e9"], "terms": {"document": 0, "file": [0, 8], "project": [0, 9, 11, 14], "demo": 0, "notebook": [0, 6, 8, 14], "exampl": [0, 4, 14], "demonstr": 0, "tutori": [0, 10], "purpos": 0, "docstr": 0, "automat": 0, "gener": [0, 14], "page": [0, 10, 14], "how": 0, "code": [0, 9, 10, 11, 14], "qualiti": [0, 10], "creat": [0, 10, 15], "doc": [0, 9], "relat": 0, "thi": [0, 1, 3, 4, 9, 11, 14], "particularli": 0, "The": [1, 4, 9, 14, 15], "whole": 1, "ar": [1, 3, 14], "us": [1, 4, 9, 10, 12, 14, 15], "close": [1, 2, 12, 13, 14, 15], "price": [1, 5, 10, 12, 13, 15], "chosen": 1, "arbitrarili": 1, "amongst": 1, "open": [1, 9, 13, 15], "high": [1, 13, 15], "low": [1, 13, 15], "wai": 1, "can": [1, 4], "plot": [1, 3, 4, 5, 12, 14, 15], "otherwis": [1, 9], "mai": [1, 3, 12], "cross": 1, "each": 1, "other": 1, "import": [1, 2, 3, 5, 9, 10], "mplfinanc": [1, 3, 13], "mpl": [1, 3, 13], "panda": [1, 2, 12, 13, 14, 15], "pd": [1, 2, 5, 12, 13, 14, 15], "from": [1, 2, 3, 12, 13, 14, 15], "src": [1, 2, 3, 9, 12, 13, 14, 15], "util": [1, 2, 3, 6, 12, 13, 14, 15], "init_notebook": [1, 2, 3, 12, 13, 14, 15], "choos": [1, 12], "method": [1, 5, 14], "detrend_model_nam": 1, "linearmadetrend": [1, 2, 5, 6, 12, 14, 15], "model_opt": 1, "window": [1, 2, 5, 9, 12, 14, 15], "100": [1, 3, 5, 12, 14, 15], "raw_data_fold": 1, "raw_data": [1, 2, 3, 12, 13, 14], "processed_data_fold": 1, "f": [1, 2, 3, 9, 12, 13, 14, 15], "processed_data": [1, 14, 15], "detrend_data": [1, 14, 15], "stock_nam": [1, 2, 3, 12, 13, 14, 15], "aapl": [1, 2, 3, 4, 11, 12, 13, 14, 15], "df": [1, 2, 3, 12, 13, 14], "read_csv": [1, 2, 12, 13, 14, 15], "csv": [1, 2, 3, 12, 13, 14, 15], "parse_d": [1, 2, 12, 13, 14, 15], "date": [1, 2, 5, 12, 13, 14, 15], "index_col": [1, 2, 12, 13, 14, 15], "print": [1, 3, 12, 13, 14, 15], "shape": [1, 3, 12, 13, 14, 15], "df_detrend": [1, 15], "756": [1, 3, 12, 13, 14, 15], "6": [1, 3, 4, 12, 13, 14, 15], "df_6_month": 1, "index": [1, 2, 5, 10, 12, 13, 14, 15], "timestamp": [1, 13, 14], "2021": [1, 3, 13, 14, 15], "06": [1, 14, 15], "01": [1, 3, 13, 14, 15], "df_detrend_6_month": 1, "type": [1, 3, 4, 5, 13, 14], "candl": [1, 3, 13], "titl": [1, 4, 12, 13, 14, 15], "cour": [1, 10, 12, 13], "de": [1, 2, 10], "l": [1, 10, 12, 13, 14], "action": [1, 13], "style": [1, 3, 13], "yahoo": [1, 3, 13], "san": [1, 14, 15], "la": [1, 10, 13], "tendanc": [1, 10, 13], "function": [2, 4, 6, 10, 12, 14, 15], "bsplinesdetrend": [2, 5, 6, 12], "exponentialmadetrend": [2, 5, 6, 12], "linearregressiondetrend": [2, 5, 6, 12], "polynomialregressiondetrend": [2, 5, 6, 12], "lectur": [2, 10], "donn\u00e9": [2, 10], "data_fold": [2, 3, 12, 13, 14, 15], "data": [2, 4, 5, 10, 11, 12, 13, 14, 15], "y": [2, 5, 12, 13, 14, 15], "model": [2, 5, 12, 14], "order": [2, 5, 12, 14, 15], "5": [2, 5, 12, 13, 14, 15], "n_segment": [2, 5, 12], "15": [2, 13, 14], "500": 2, "alpha": [2, 5, 12], "0": [2, 5, 12, 14, 15], "9": [2, 12, 13, 14, 15], "interval_length": [2, 5, 12], "50": [2, 12, 14], "degre": [2, 5, 12], "3": [2, 4, 5, 12, 13, 14, 15], "detrend_model": [2, 12], "y_fit": [2, 5, 12], "fit": [2, 5, 6, 12, 14], "y_detrend": [2, 5, 12], "predict": [2, 5, 6, 10, 12], "fancy_plot": [2, 5, 6, 12], "xticklabel": [2, 5, 12, 15], "strftime": [2, 12], "m": [2, 12, 14, 15], "d": [2, 10, 12, 13, 15], "home": [2, 3, 9, 12, 14, 15], "runner": [2, 3, 12, 14, 15], "work": [2, 12, 15], "stock": [2, 4, 11, 12, 14, 15], "analysi": [2, 3, 11, 12, 14, 15], "detrend_fancy_plot": [2, 6, 12], "py": [2, 3, 12, 14, 15], "43": [2, 12], "userwarn": [2, 3, 4, 12], "set_ticklabel": [2, 12], "should": [2, 4, 9, 12], "onli": [2, 9, 12, 14, 15], "fix": [2, 4, 12], "number": [2, 3, 12, 14], "tick": [2, 12], "i": [2, 3, 9, 11, 12, 14, 15], "e": [2, 12, 14], "after": [2, 12], "set_tick": [2, 12], "fixedloc": [2, 12], "ax": [2, 12, 13, 14, 15], "set_xticklabel": [2, 12], "51": [2, 12], "1": [2, 3, 4, 5, 12, 13, 14, 15], "yfinanc": [3, 11], "yf": 3, "chang": [3, 14], "you": [3, 4, 9], "want": [3, 4], "start": [3, 4, 14], "2019": [3, 13, 14, 15], "end": [3, 12], "12": [3, 12, 13, 14, 15], "31": [3, 15], "complet": 3, "verifi": 3, "your": [3, 4, 9], "need": [3, 9, 15], "cach": [3, 14], "pypoetri": [3, 14], "virtualenv": [3, 14], "fhkmw": [3, 14], "py3": [3, 14], "10": [3, 5, 9, 12, 13, 14, 15], "lib": [3, 14], "python3": [3, 14], "site": [3, 14], "packag": [3, 6, 10, 14], "_arg_valid": 3, "84": 3, "warn": [3, 14], "so": [3, 9, 14], "much": 3, "THAT": 3, "IT": 3, "NOT": 3, "BE": 3, "possibl": 3, "TO": 3, "see": [3, 4, 10], "detail": 3, "ohlc": 3, "bar": [3, 12, 14], "etc": [3, 9, 15], "For": 3, "more": 3, "inform": [3, 14], "http": [3, 4], "github": [3, 14], "com": [3, 4], "matplotlib": [3, 4, 12, 13, 14, 15], "wiki": 3, "too": 3, "silenc": 3, "set": [3, 14], "line": [3, 4, 9, 14], "mpf": 3, "OR": 3, "kwarg": [3, 14], "warn_too_much_data": 3, "n": [3, 12, 13, 14, 15], "where": 3, "an": [3, 11, 13, 14], "integ": [3, 14], "larger": 3, "than": [3, 9], "point": [3, 12, 14], "to_csv": [3, 15], "choic": 4, "show": [4, 14], "its": [4, 5], "candlestick": [4, 10], "update_candlestick": [4, 6], "valu": [4, 5, 12, 14], "str": [4, 5, 9], "figur": 4, "sourc": [4, 5, 9, 11], "updat": [4, 14], "paramet": [4, 5, 12, 15], "name": [4, 9, 13, 14, 15], "displai": [4, 14, 15], "return": [4, 5, 12, 14], "A": [4, 14], "plotli": 4, "repres": 4, "graph_obj": 4, "To": [4, 14], "symbol": 4, "call": [4, 14], "like": 4, "update_line_plot": [4, 6], "helper": 4, "common": 4, "all": [4, 5, 9, 11], "matplotlib_init_for_dash": [4, 6], "none": [4, 5, 13, 14], "run": [4, 8, 14], "befor": [4, 12], "dash": 4, "It": [4, 8], "crash": 4, "gui": 4, "outsid": 4, "main": 4, "thread": 4, "fail": [4, 14], "stackoverflow": 4, "question": 4, "69924881": 4, "fa": 4, "plt_dash": [4, 6], "graph": [4, 5, 10], "plt": [4, 12, 13, 14, 15], "scatter": 4, "2": [4, 9, 10, 12, 13, 15], "4": [4, 12, 13, 14, 15], "add": 4, "anyth": 4, "And": 4, "variabl": [4, 12, 14], "class": [5, 10], "int": [5, 12], "base": [5, 14], "basedetrend": [5, 6], "ndarrai": [5, 14], "datafram": [5, 12, 14, 15], "bspline": [5, 12], "seri": [5, 11, 12, 14, 15], "np": [5, 12, 14], "method_nam": 5, "object": [5, 13, 14, 15], "two": [5, 9, 12, 14], "origin": [5, 12, 14], "trend": [5, 11, 12, 14], "curv": 5, "core": 5, "option": 5, "financi": 5, "default": [5, 9], "_summary_": 5, "dimension": 5, "arrai": [5, 12, 14], "same": [5, 15], "length": [5, 13, 15], "y_origin": 5, "len": [5, 12, 13, 14, 15], "float": [5, 8, 12], "05": [5, 12, 14, 15], "exponenti": 5, "mobil": [5, 13, 14], "averag": 5, "linear": 5, "time": [5, 11, 12, 14, 15], "_fancy_plot": [5, 6], "fitted_paramet": 5, "dict": 5, "dashboard": [6, 10], "submodul": 6, "plot_stock": 6, "modul": [6, 10], "content": [6, 9], "detrend": [6, 10, 12, 14, 15], "write_detrend_data": 6, "poetri": 8, "check": [8, 14], "respect": [8, 9], "doesn": 8, "t": [8, 12, 13, 14], "modifi": 8, "nbqa": 8, "stand": 8, "assur": 8, "mode": 8, "allow": 8, "compat": 8, "top": 8, "read": 9, "rtd": 9, "better": 9, "depend": 9, "group": 9, "dev": 9, "sphinx_rtd_them": 9, "provid": [9, 14], "script": 9, "init": 9, "go": 9, "sai": 9, "ye": 9, "separ": 9, "now": 9, "have": 9, "subfold": 9, "contain": [9, 11, 14], "html": [9, 14], "which": 9, "rst": 9, "languag": 9, "similar": 9, "markdown": 9, "differ": 9, "In": [9, 14], "makefil": 9, "make": [9, 14], "bat": 9, "defin": [9, 12, 15], "command": 9, "launch": 9, "replac": 9, "somewher": 9, "first": 9, "html_theme": 9, "alabast": 9, "autodoc": 9, "napoleon": 9, "support": [9, 14], "numpi": [9, 12], "ext": 9, "viewcod": 9, "find": 9, "sy": 9, "pathlib": 9, "filepath": 9, "__file__": 9, "resolv": 9, "root_fold": 9, "parent": 9, "append": 9, "must": 9, "done": [9, 14], "onc": 9, "goal": 9, "appear": 9, "one": 9, "care": 9, "indent": 9, "toctre": 9, "maxdepth": 9, "caption": 9, "apidoc": 9, "o": 9, "between": [9, 12], "remov": 9, "thing": 9, "thei": 9, "do": 9, "next": [9, 14], "browser": 9, "voil\u00e0": 9, "exploratoir": 10, "et": [10, 15], "pr\u00e9sentat": 10, "probl\u00e9matiqu": 10, "d\u00e9composit": [10, 13], "soustract": 10, "saisonnalit\u00e9": [10, 12, 13], "trait\u00e9": 10, "en": [10, 12], "utilis": 10, "api": 10, "statsmodel": [10, 12, 13, 14], "par": [10, 13, 14], "superposit": 10, "s\u00e9ri": 10, "p\u00e9riodogramm": 10, "diff\u00e9renci": 10, "saisonni\u00e8r": 10, "mod\u00e8l": [10, 12, 13], "arima": [10, 13, 14], "pr\u00e9diction": [10, 12, 13], "du": [10, 12, 13, 15], "boursier": [10, 12, 13], "sarima": [10, 15], "new": 10, "train": 10, "test": [10, 15], "split": 10, "prix": [10, 12, 15], "appl": [10, 13], "\u00e0": [10, 12, 13, 15], "moi": [10, 13, 15], "stochasticit\u00e9": 10, "evalu": 10, "xgboost": 10, "extra": 10, "tree": 10, "svm": 10, "prophet": [10, 13], "comparaison": [10, 12, 13], "behav": 10, "chart": 10, "download": [10, 11], "websit": 10, "initi": 10, "configur": 10, "build": 10, "black": 10, "format": 10, "lint": 10, "flake8": 10, "pep8": 10, "convent": 10, "sort": 10, "isort": 10, "search": [10, 14], "ipynb": 11, "ani": 11, "exploratori": 11, "eda": 11, "decomposit": 11, "research": 11, "seasonan": 11, "period": [11, 14, 15], "stochast": [11, 14], "objectif": [12, 13, 14, 15], "mod\u00e9lis": [12, 15], "avec": [12, 14, 15], "diff\u00e9rent": [12, 13], "soustrair": [12, 15], "compar": [12, 14], "le": [12, 13, 14, 15], "choisi": [12, 14], "crit\u00e8r": [12, 14], "\u00e9valuat": [12, 14], "aic": [12, 14], "mse": [12, 14], "graphiqu": [12, 14, 15], "courb": [12, 14], "ne": [12, 13, 14], "doit": [12, 14], "pa": [12, 13, 14], "fair": [12, 14], "quoi": [12, 14], "pyplot": [12, 13, 14, 15], "sklearn": [12, 14], "metric": [12, 14], "mean_squared_error": [12, 14], "graphic": [12, 13, 15], "tsaplot": [12, 13, 15], "plot_acf": [12, 13, 15], "detrend_dict": 12, "est": [12, 15], "pour": [12, 13, 15], "un": [12, 13, 14, 15], "s\u00e9rie": [12, 14, 15], "chronologiqu": 12, "sa": 12, "composant": 12, "premi\u00e8r": 12, "inh\u00e9rent": 12, "natur": 12, "ell": 12, "peut": 12, "plu": 12, "souvent": 12, "se": [12, 15], "repr\u00e9sent": [12, 15], "droit": 12, "hauss": 12, "ou": 12, "baiss": 12, "dan": [12, 15], "ca": 12, "g\u00e9n\u00e9ralement": 12, "haussi\u00e8r": 12, "qui": [12, 15], "": 12, "expliqu": 12, "concept": 12, "croissanc": 12, "\u00e9conomiqu": 12, "daili": 12, "figsiz": [12, 14, 15], "center": [12, 13, 14, 15], "xlabel": [12, 13, 15], "soit": 12, "vecteur": 12, "y_1": 12, "dot": 12, "y_n": 12, "cl\u00f4ture": [12, 15], "aux": 12, "temp": 12, "ici": 12, "jour": [12, 13, 14, 15], "ajust": 12, "simpl": 12, "\u00e9quation": 12, "beta_0": 12, "beta_1": 12, "x": [12, 14, 15], "o\u00f9": 12, "param\u00e8tr": [12, 15], "estim": [12, 14], "dummi": [12, 14, 15], "avanc": 12, "pui": [12, 15], "il": 12, "faut": 12, "au": [12, 15], "original": 12, "y_": 12, "pred": 12, "detrend_i": 12, "y_i": 12, "pred_i": 12, "hspace": 12, "12px": 12, "foral": 12, "substract": 12, "adjust": 12, "get": [12, 14], "result": [12, 14], "def": [12, 14], "y_true": [12, 14], "nb_paramet": 12, "k": [12, 14], "log": [12, 14], "aic_detrend": 12, "mse_detrend": 12, "input": 12, "close_detrend": [12, 15], "acf": [12, 15], "lag": [12, 15], "_": [12, 13, 14, 15], "subplot": [12, 14, 15], "16": [12, 13, 14, 15], "fort": 12, "autocorr\u00e9l": [12, 15], "premier": 12, "montrent": 12, "que": [12, 13, 14], "temporel": [12, 14], "contient": 12, "apr\u00e8": 12, "d\u00e9construct": 12, "deuxi\u00e8m": [12, 15], "affich": [12, 15], "cepend": 12, "encor": 12, "important": [12, 15], "petit": 12, "c": [12, 14], "indic": 12, "cyclicit\u00e9": 12, "ordr": 12, "m\u00eame": 12, "princip": 12, "appliqu\u00e9": 12, "particularit\u00e9": 12, "sont": 12, "ajout\u00e9": 12, "comm": 12, "explic": 12, "devient": 12, "sum_": 12, "beta_i": 12, "x_i": 12, "tout": 12, "6px": 12, "cett": [12, 15], "m\u00e9thode": [12, 14], "permet": 12, "capter": 12, "croissant": 12, "carr\u00e9": 12, "exempl": [12, 15], "segment": [12, 14], "polynomi": 12, "regress": 12, "On": [12, 14], "munit": 12, "x_t": 12, "mathbb": 12, "llbracket": 12, "infti": 12, "rrbracket": 12, "gauch": 12, "profondeur": 12, "ma_k": 12, "frac": 12, "displaystyl": 12, "fait": [12, 15], "parti": [12, 15], "famil": 12, "pond\u00e9r\u00e9": 12, "constant": 12, "lissag": 12, "begin": [12, 14], "align": 12, "expma": 12, "x_": 12, "left": 12, "right": [12, 14], "remarqu": 12, "instant": 12, "prend": 12, "compt": 12, "pr\u00e9c\u00e8dent": 12, "toutefoi": 12, "valeur": [12, 13], "tr\u00e8": 12, "ant\u00e9rieur": 12, "impact": 12, "peu": 12, "r\u00e9sultat": 12, "autant": 12, "grand": 12, "peuvent": 12, "donc": [12, 15], "\u00eatre": 12, "n\u00e9glig\u00e9": 12, "\u00e9tant": 12, "n\u0153ud": 12, "t_i": 12, "index\u00e9": 12, "selon": 12, "degr\u00e9": 12, "fonction": 12, "param\u00e9triqu": 12, "d\u00e9fini": 12, "mathbf": 12, "r": 12, "case": 12, "rightarrow": 12, "b_": 12, "p": [12, 14, 15], "t_": 12, "utilis\u00e9": 12, "interpol": 12, "approxim": 12, "continu": 12, "partir": 12, "discr\u00e8t": 12, "not\u00e9": 12, "r\u00e9cursiv": 12, "suit": 12, "text": [12, 14], "si": 12, "leq": 12, "sinon": 12, "nombr": 12, "total": [12, 14], "contr\u00f4l": 12, "dai": [12, 14], "knot": 12, "correspond": 12, "detrend_df": 12, "column": [12, 13, 14], "to_markdown": [12, 14], "kind": [12, 14], "xtick": [12, 14, 15], "rotat": [12, 14], "45": [12, 14], "ha": [12, 14], "tableau": [12, 14], "7005": 12, "56": [12, 14], "10523": 12, "7023": 12, "09": [12, 13, 14, 15], "10770": 12, "7014": 12, "76": 12, "10651": 12, "8": [12, 14], "6973": 12, "26": [12, 15], "10082": 12, "meilleur": [12, 14], "plot_pacf": [13, 15], "adj": [13, 15], "volum": [13, 15], "dtype": [13, 14, 15], "datetimeindex": 13, "02": [13, 14, 15], "03": [13, 14, 15], "04": [13, 14, 15], "07": [13, 14, 15], "08": [13, 14, 15], "11": [13, 14], "14": [13, 14, 15], "17": [13, 14], "20": [13, 14, 15], "21": [13, 14, 15], "22": 13, "23": [13, 14, 15], "27": [13, 14, 15], "28": [13, 14, 15], "29": [13, 14, 15], "30": [13, 14, 15], "datetime64": 13, "freq": [13, 14, 15], "plan": 13, "introduct": 13, "d\u00e9finit": 13, "r\u00e9gression": [13, 14], "moyenn": [13, 14], "b": [13, 14], "spline": 13, "retrait": 13, "season": [13, 14, 15], "periodogram": [13, 15], "arma": [13, 14], "conclus": 13, "r\u00e9pons": 13, "janvier": [13, 15], "2022": [13, 15], "weekend": [13, 14], "f\u00e9ri\u00e9": 13, "exclu": 13, "journali\u00e8r": 13, "nou": [13, 15], "\u00e9tudieron": 13, "fermetur": 13, "df_3_moi": 13, "mav": 13, "ylabel": [13, 15], "lag_plot": 13, "cherchon": 13, "pr\u00e9dire": [13, 14], "horizon": [13, 14], "60": [13, 14], "pouvoir": 13, "sp\u00e9culer": 13, "avoir": 13, "interval": 13, "confianc": [13, 15], "prendr": 13, "trop": 13, "risqu": 13, "variant": 14, "random": 14, "forest": 14, "vector": 14, "machin": 14, "lin\u00e9air": 14, "mensuel": 14, "learn": 14, "extratre": 14, "automatiqu": 14, "autr": 14, "mdate": 14, "ensembl": 14, "extratreesregressor": 14, "linear_model": 14, "linearregress": 14, "mean_absolute_error": 14, "mean_absolute_percentage_error": 14, "svr": 14, "tsa": [14, 15], "statespac": 14, "sarimax": 14, "arima_paramet": 14, "seasonal_ord": 14, "prediction_results_dict": 14, "take": [14, 15], "target": 14, "fitted_arima": 14, "summari": 14, "THE": 14, "bfg": 14, "precis": 14, "220d": 14, "At": 14, "x0": 14, "exactli": 14, "bound": 14, "iter": 14, "09762d": 14, "00": 14, "proj": 14, "g": 14, "04128d": 14, "tsa_model": 14, "473": 14, "valuewarn": 14, "been": 14, "associ": 14, "frequenc": [14, 15], "ignor": 14, "when": 14, "forecast": 14, "self": 14, "_init_d": 14, "problem": 14, "unconstrain": 14, "08571d": 14, "66727d": 14, "08366d": 14, "10199d": 14, "08036d": 14, "48142d": 14, "07949d": 14, "87000d": 14, "25": [14, 15], "07880d": 14, "7": [14, 15], "76589d": 14, "07724d": 14, "55703d": 14, "35": 14, "07699d": 14, "37390d": 14, "40": 14, "07618d": 14, "06681d": 14, "07585d": 14, "99382d": 14, "07546d": 14, "08780d": 14, "tit": 14, "tnf": 14, "tnint": 14, "explor": 14, "dure": 14, "cauchi": 14, "skip": 14, "nact": 14, "activ": 14, "final": 14, "projg": 14, "norm": 14, "gradient": 14, "088d": 14, "075d": 14, "0754648378324383": 14, "stop": 14, "NO": 14, "reach": 14, "limit": 14, "dep": 14, "No": 14, "observ": 14, "likelihood": 14, "1569": 14, "051": 14, "mon": 14, "feb": 14, "2024": 14, "3180": 14, "103": 14, "bic": 14, "3277": 14, "292": 14, "sampl": 14, "hqic": 14, "3217": 14, "538": 14, "covari": 14, "opg": 14, "coef": 14, "std": 14, "err": 14, "z": 14, "025": 14, "975": 14, "l1": 14, "2920": 14, "216": 14, "980": 14, "000": 14, "869": 14, "715": 14, "l2": 14, "5610": 14, "267": 14, "099": 14, "036": 14, "085": 14, "037": 14, "l3": 14, "2448": 14, "192": 14, "277": 14, "202": 14, "131": 14, "621": 14, "l4": 14, "3863": 14, "143": 14, "705": 14, "007": 14, "106": 14, "666": 14, "l5": 14, "6578": 14, "137": 14, "814": 14, "926": 14, "390": 14, "l6": 14, "2803": 14, "139": 14, "019": 14, "043": 14, "008": 14, "552": 14, "l7": 14, "4084": 14, "133": 14, "072": 14, "002": 14, "148": 14, "669": 14, "l8": 14, "8304": 14, "181": 14, "595": 14, "185": 14, "476": 14, "l9": 14, "1218": 14, "271": 14, "142": 14, "591": 14, "653": 14, "l10": 14, "7089": 14, "173": 14, "096": 14, "048": 14, "370": 14, "ma": 14, "4244": 14, "219": 14, "934": 14, "053": 14, "855": 14, "006": 14, "2860": 14, "167": 14, "717": 14, "086": 14, "040": 14, "612": 14, "0823": 14, "600": 14, "548": 14, "351": 14, "186": 14, "4330": 14, "149": 14, "897": 14, "004": 14, "726": 14, "140": 14, "3459": 14, "141": 14, "462": 14, "014": 14, "071": 14, "1033": 14, "138": 14, "750": 14, "453": 14, "373": 14, "3871": 14, "146": 14, "645": 14, "674": 14, "4684": 14, "592": 14, "010": 14, "114": 14, "823": 14, "7679": 14, "189": 14, "054": 14, "397": 14, "1254": 14, "038": 14, "001": 14, "050": 14, "201": 14, "sigma2": 14, "6688": 14, "535": 14, "408": 14, "930": 14, "ljung": 14, "box": 14, "q": [14, 15], "jarqu": 14, "bera": 14, "jb": 14, "prob": 14, "91": 14, "heteroskedast": 14, "h": 14, "skew": 14, "side": 14, "kurtosi": 14, "matrix": 14, "outer": 14, "product": 14, "complex": 14, "step": 14, "607": 14, "convergencewarn": 14, "maximum": 14, "optim": 14, "converg": 14, "mle_retv": 14, "forecast_step": 14, "get_forecast": 14, "date_rang": 14, "forecast_index": 14, "exclud": 14, "predicted_valu": 14, "predicted_mean": 14, "836": 14, "avail": 14, "given": 14, "get_prediction_index": 14, "futurewarn": [14, 15], "version": 14, "without": 14, "except": 14, "plot_n_days_prior_pr": 14, "label": [14, 15], "color": 14, "red": 14, "legend": 14, "gca": 14, "xaxi": [14, 15], "set_major_loc": 14, "monthloc": 14, "interv": 14, "axi": 14, "gcf": 14, "autofmt_xd": 14, "train_test_split_d": 14, "08236d": 14, "78026d": 14, "06322d": 14, "87002d": 14, "05780d": 14, "38443d": 14, "05447d": 14, "85209d": 14, "05395d": 14, "90870d": 14, "05044d": 14, "18707d": 14, "04875d": 14, "01596d": 14, "04800d": 14, "00315d": 14, "04743d": 14, "00667d": 14, "04602d": 14, "24028d": 14, "04558d": 14, "63582d": 14, "55": 14, "636d": 14, "046d": 14, "0455840523131141": 14, "recomposon": 14, "obtenir": [14, 15], "pr\u00e9vision": 14, "original_data": 14, "original_data_train": 14, "original_data_test": 14, "drop": 14, "vanish": 14, "issu": 14, "reset_index": 14, "true": 14, "inplac": 14, "reconstruit": 14, "avait": 14, "pr\u00e9dite": 14, "rang": [14, 15], "rolling_mean": 14, "roll": 14, "fals": [14, 15], "mean": [14, 15], "pred_trend": 14, "iloc": 14, "pred_index": 14, "concat": 14, "300": 14, "blue": 14, "0x7fcae9bd1900": 14, "zero": 14, "add_compon": 14, "put": 14, "actual": 14, "200": 14, "green": 14, "0x7fcae9a7b910": 14, "y_pred": 14, "mae": 14, "rmse": 14, "squar": 14, "698679992853735": 14, "13": [14, 15], "862872951424345": 14, "relectur": 14, "train_start_d": 14, "train_end_d": 14, "df_train": 14, "loc": 14, "copi": [14, 15], "df_test": 14, "time_dummi": 14, "tail": 14, "689": 14, "690": 14, "691": 14, "692": 14, "693": 14, "int64": 14, "head": [14, 15], "694": 14, "695": 14, "696": 14, "697": 14, "698": 14, "x_col": 14, "y_col": 14, "x_test": 14, "y_test": 14, "lr": 14, "xgb": 14, "xgbregressor": 14, "random_st": 14, "n_job": 14, "colsample_bytre": 14, "max_depth": 14, "jupyt": 14, "environ": 14, "pleas": 14, "rerun": 14, "cell": 14, "represent": 14, "trust": 14, "unabl": 14, "render": 14, "try": 14, "load": 14, "nbviewer": 14, "org": 14, "linearregressionlinearregress": 14, "y_residu": 14, "base_scor": 14, "booster": 14, "callback": 14, "colsample_bylevel": 14, "colsample_bynod": 14, "devic": 14, "early_stopping_round": 14, "enable_categor": 14, "eval_metr": 14, "feature_typ": 14, "gamma": 14, "grow_polici": 14, "importance_typ": 14, "interaction_constraint": 14, "learning_r": 14, "max_bin": 14, "max_cat_threshold": 14, "max_cat_to_onehot": 14, "max_delta_step": 14, "max_leav": 14, "min_child_weight": 14, "miss": 14, "nan": 14, "monotone_constraint": 14, "multi_strategi": 14, "n_estim": 14, "num_parallel_tre": 14, "xgbregressorxgbregressor": 14, "xgb_predict": 14, "lr_predict": 14, "reshap": 14, "sur": [14, 15], "line2d": 14, "0x7fcae99a48e0": 14, "0x7fcae9b13910": 14, "252235166510234": 14, "821550637003275": 14, "1152": 14, "dataconversionwarn": 14, "wa": 14, "pass": [14, 15], "1d": 14, "expect": 14, "n_sampl": 14, "ravel": 14, "fit_method": 14, "arg": 14, "extratreesregressorextratreesregressor": 14, "et_predict": 14, "201822820070818": 14, "74557499696818": 14, "valid": 14, "1183": 14, "column_or_1d": 14, "svrsvr": 14, "svr_predict": 14, "297525832287155": 14, "73950426028892": 14, "39": 14, "480000": 14, "547501": 14, "37": 14, "064999": 14, "36": 14, "982498": 14, "687500": 14, "cmdstanpi": 14, "info": 14, "chain": 14, "process": 14, "0x7fcae9b30520": 14, "futur": 14, "yhat": 14, "yhat_low": 14, "yhat_upp": 14, "58": 14, "163": 14, "485849": 14, "157": [14, 15], "429297": 14, "169": 14, "888856": 14, "59": 14, "164": 14, "851525": 14, "158": 14, "423615": 14, "171": 14, "336812": 14, "165": 14, "169482": 14, "395403": 14, "728886": 14, "61": [14, 15], "506546": 14, "159": 14, "233661": 14, "649162": 14, "62": 14, "524170": 14, "169593": 14, "172": 14, "744326": 14, "fig": [14, 15], "ax1": 14, "fig1": 14, "orang": 14, "72": 14, "behavior": 14, "datetimeproperti": 14, "to_pydatetim": 14, "deprec": [14, 15], "python": 14, "datetim": 14, "instead": 14, "retain": 14, "old": 14, "fcst_t": 14, "fcst": 14, "dt": 14, "73": 14, "histori": 14, "0x7fcae666e860": 14, "fig2": 14, "plot_compon": 14, "228": 14, "df_y": 14, "sea": 14, "0072b2": 14, "354": 14, "_lower": 14, "mape": 14, "228347960218333": 14, "378329691676633": 14, "prediction_results_df": 14, "3524": 14, "9797": 14, "6817": 14, "6047": 14, "2914": 14, "85264": 14, "2018": 14, "74557": 14, "2975": 14, "7395": 14, "97155": 14, "26206": 14, "rep\u00e9rer": 15, "mouvement": 15, "saisonni": 15, "notr": 15, "outil": 15, "sm": 15, "seasonalplott": 15, "check_stationarity_and_differ": 15, "636750": 15, "646748": 15, "801751": 15, "879250": 15, "465916": 15, "148158800": 15, "465638": 15, "030637": 15, "960637": 15, "913137": 15, "341764": 15, "365248800": 15, "434760": 15, "429759": 15, "617259": 15, "502261": 15, "991877": 15, "234428400": 15, "487831": 15, "455330": 15, "187832": 15, "680332": 15, "166622": 15, "219111200": 15, "372408": 15, "807405": 15, "632406": 15, "074907": 15, "589533": 15, "164101200": 15, "chaqu": 15, "barr": 15, "roug": 15, "tou": 15, "19": 15, "close_monthly_resampl": 15, "resampl": 15, "792133": 15, "279019": 15, "514090": 15, "201218": 15, "825486": 15, "float64": 15, "month_plot": 15, "week": 15, "close_weekly_resampl": 15, "w": 15, "098216": 15, "975125": 15, "798467": 15, "138694": 15, "734122": 15, "961971": 15, "062935": 15, "276648": 15, "106925": 15, "18": 15, "462308": 15, "sun": 15, "groupbi": 15, "seasonal_plot": 15, "groupby_week_object": 15, "lambda": 15, "54": 15, "prevent": 15, "some": 15, "every_nth_tick": 15, "enumer": 15, "get_ticklabel": 15, "set_vis": 15, "df_detrend_season": 15, "adapt": 15, "to_period": 15, "weekofyear": 15, "dayofyear": 15, "year": 15, "ci": 15, "errorbar": 15, "effect": 15, "sn": 15, "lineplot": 15, "plot_periodogram": 15, "time_seri": 15, "varianc": 15, "met": 15, "\u00e9videnc": 15, "fr\u00e9quenc": 15, "semi": 15, "annuel": 15, "trimestriel": 15, "ce": 15, "constat": 15, "cycl": 15, "quarterly_freq": 15, "90": 15, "semiannual_freq": 15, "180": 15, "differenc": 15, "quaterli": 15, "close_without_season": 15, "shift": 15, "semiannu": 15, "isna": 15, "sum": 15, "choisisson": 15, "valant": 15, "avon": 15, "d\u00e9sormai": 15, "jeu": 15, "manquant": 15, "cet": 15, "effet": 15, "d\u00fb": 15, "season_treated_data": 15, "quaterly_semiannual_differenc": 15, "pacf": 15, "seuil": 15, "95": 15, "retard": 15, "consacr\u00e9": 15, "pr\u00e9dictif": 15, "d\u00e9signent": 15, "respectiv": 15, "atteindr": 15, "stationnarit\u00e9": 15, "746602": 15, "162185": 15, "355712": 15, "24": 15, "423930": 15, "872582": 15, "962022": 15, "379935": 15, "723572": 15, "662810": 15, "430709": 15, "576": 15, "stationary_time_seri": 15, "num_diff": 15, "adfuller_pvalu": 15, "pvalu": 15, "adful": 15, "suffit": 15, "stationnair": 15, "partiel": 15}, "objects": {"": [[4, 0, 0, "-", "dashboards"], [5, 0, 0, "-", "functions"], [7, 0, 0, "-", "notebooks"]], "dashboards": [[4, 0, 0, "-", "plot_stocks"], [4, 0, 0, "-", "utils"]], "dashboards.plot_stocks": [[4, 1, 1, "", "update_candlestick"], [4, 1, 1, "", "update_line_plot"]], "dashboards.utils": [[4, 1, 1, "", "matplotlib_init_for_dash"], [4, 1, 1, "", "plt_dash"]], "functions": [[5, 0, 0, "-", "detrend"], [5, 0, 0, "-", "detrend_fancy_plot"], [5, 0, 0, "-", "write_detrend_data"]], "functions.detrend": [[5, 2, 1, "", "BSplinesDetrend"], [5, 2, 1, "", "BaseDetrend"], [5, 2, 1, "", "ExponentialMADetrend"], [5, 2, 1, "", "LinearMADetrend"], [5, 2, 1, "", "LinearRegressionDetrend"], [5, 2, 1, "", "PolynomialRegressionDetrend"]], "functions.detrend.BSplinesDetrend": [[5, 3, 1, "", "fit"]], "functions.detrend.BaseDetrend": [[5, 3, 1, "", "fancy_plot"], [5, 3, 1, "", "predict"]], "functions.detrend.ExponentialMADetrend": [[5, 3, 1, "", "fit"]], "functions.detrend.LinearMADetrend": [[5, 3, 1, "", "fit"]], "functions.detrend.LinearRegressionDetrend": [[5, 3, 1, "", "fit"]], "functions.detrend.PolynomialRegressionDetrend": [[5, 3, 1, "", "fit"]], "functions.detrend_fancy_plot": [[5, 1, 1, "", "_fancy_plot"]]}, "objtypes": {"0": "py:module", "1": "py:function", "2": "py:class", "3": "py:method"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "function", "Python function"], "2": ["py", "class", "Python class"], "3": ["py", "method", "Python method"]}, "titleterms": {"sourc": 0, "folder": [0, 9, 11], "descript": 0, "organ": [0, 9], "how": [1, 2, 3, 9, 10], "detrend": [1, 2, 5], "data": [1, 3], "behav": 1, "candlestick": [1, 13], "chart": [1, 13], "us": 2, "class": 2, "download": 3, "new": [3, 14], "stock": [3, 6, 10], "dashboard": 4, "packag": [4, 5, 7], "submodul": [4, 5], "plot_stock": 4, "modul": [4, 5, 7, 9], "util": 4, "content": [4, 5, 7], "function": 5, "detrend_fancy_plot": 5, "write_detrend_data": 5, "analysi": [6, 10], "notebook": [7, 10, 11], "code": 8, "qualiti": 8, "tutori": 8, "black": 8, "format": 8, "lint": 8, "flake8": 8, "pep8": 8, "convent": 8, "sort": 8, "import": [8, 12, 13, 14, 15], "isort": 8, "creat": 9, "document": [9, 10], "websit": 9, "initi": 9, "instal": 9, "sphinx": 9, "run": 9, "quickstart": 9, "configur": 9, "poetri": 9, "config": 9, "conf": 9, "py": 9, "edit": 9, "theme": 9, "add": 9, "recommend": 9, "extens": 9, "root": 9, "path": 9, "build": 9, "page": 9, "index": 9, "gener": 9, "from": 9, "docstr": 9, "clean": 9, "output": 9, "file": 9, "see": 9, "welcom": 10, "": 10, "analys": [10, 13], "demo": 10, "guid": 10, "refer": 10, "indic": 10, "tabl": 10, "src": 11, "d\u00e9composit": [12, 14, 15], "tendanc": [12, 14, 15], "et": [12, 13, 14], "lectur": [12, 13], "de": [12, 13, 14, 15], "donn\u00e9": [12, 13, 14, 15], "soustract": 12, "la": [12, 14, 15], "r\u00e9gression": 12, "lin\u00e9air": 12, "polynomial": 12, "par": [12, 15], "morceaux": 12, "moyenn": [12, 15], "mobil": [12, 15], "exponentiel": 12, "b": 12, "spline": 12, "exploratoir": 13, "pr\u00e9sentat": 13, "jeu": 13, "affichag": [13, 14], "graphiqu": 13, "en": [13, 15], "bougi": 13, "line": 13, "plot": 13, "auto": 13, "corr\u00e9lat": 13, "acf": 13, "pacf": 13, "partiel": 13, "lag": 13, "probl\u00e9matiqu": 13, "pr\u00e9diction": 14, "du": 14, "cour": 14, "boursier": 14, "sarima": 14, "predict": 14, "price": 14, "train": 14, "test": 14, "split": 14, "prix": 14, "d": 14, "appl": 14, "\u00e0": 14, "2": 14, "moi": 14, "saisonnalit\u00e9": [14, 15], "stochasticit\u00e9": 14, "evalu": 14, "xgboost": 14, "traitement": 14, "apprentissag": 14, "mod\u00e8l": [14, 15], "extra": 14, "tree": 14, "svm": 14, "prophet": 14, "pr\u00e9": 14, "pour": 14, "calcul": 14, "m\u00e9triqu": 14, "comparaison": 14, "trait\u00e9": 15, "graph": 15, "utilis": 15, "l": 15, "api": 15, "statsmodel": 15, "mensuel": 15, "hebdomadair": 15, "superposit": 15, "s\u00e9ri": 15, "p\u00e9riodogramm": 15, "diff\u00e9renci": 15, "saisonni\u00e8r": 15, "d\u00e9termin": 15, "ordr": 15, "autor\u00e9gressif": 15, "arima": 15}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1, "sphinx": 60}, "alltitles": {"source folder": [[0, "source-folder"]], "Description": [[0, "description"]], "Folder organization": [[0, "folder-organization"], [9, "folder-organization"]], "How detrended data behave with candlestick chart": [[1, "how-detrended-data-behave-with-candlestick-chart"]], "How to use detrend classes": [[2, "how-to-use-detrend-classes"]], "How to download new stock data": [[3, "how-to-download-new-stock-data"]], "dashboards package": [[4, "dashboards-package"]], "Submodules": [[4, "submodules"], [5, "submodules"]], "dashboards.plot_stocks module": [[4, "module-dashboards.plot_stocks"]], "dashboards.utils module": [[4, "module-dashboards.utils"]], "Module contents": [[4, "module-dashboards"], [5, "module-functions"], [7, "module-notebooks"]], "functions package": [[5, "functions-package"]], "functions.detrend module": [[5, "module-functions.detrend"]], "functions.detrend_fancy_plot module": [[5, "module-functions.detrend_fancy_plot"]], "functions.write_detrend_data module": [[5, "module-functions.write_detrend_data"]], "Stock Analysis": [[6, "stock-analysis"]], "notebooks package": [[7, "notebooks-package"]], "Code quality tutorials": [[8, "code-quality-tutorials"]], "Black for code formatting": [[8, "black-for-code-formatting"]], "Linting with flake8 (pep8 convention)": [[8, "linting-with-flake8-pep8-convention"]], "Sort imports with isort": [[8, "sort-imports-with-isort"]], "How to create documentation website": [[9, "how-to-create-documentation-website"]], "Initialization": [[9, "initialization"]], "Install sphinx": [[9, "install-sphinx"]], "Run the quickstart": [[9, "run-the-quickstart"]], "Configuration": [[9, "configuration"]], "Poetry config": [[9, "poetry-config"]], "conf.py": [[9, "conf-py"]], "Edit the theme": [[9, "edit-the-theme"]], "Add recommended extensions": [[9, "add-recommended-extensions"]], "Add root folder to path": [[9, "add-root-folder-to-path"]], "Build the website": [[9, "build-the-website"], [9, "id1"]], "Add the modules pages to the index": [[9, "add-the-modules-pages-to-the-index"]], "Generate pages from docstring": [[9, "generate-pages-from-docstring"]], "Create the website": [[9, "create-the-website"]], "Clean output files": [[9, "clean-output-files"]], "See the website": [[9, "see-the-website"]], "Welcome to Stock Analysis\u2019s documentation!": [[10, "welcome-to-stock-analysis-s-documentation"]], "\ud83d\udcca Analyse": [[10, null]], "\ud83d\udcd2 Demo notebooks": [[10, null]], "\ud83d\udcdd How-to guides": [[10, null]], "\ud83d\udcd6 Reference": [[10, null]], "Indices and tables": [[10, "indices-and-tables"]], "src/notebooks folder": [[11, "src-notebooks-folder"]], "D\u00e9composition : tendance": [[12, "decomposition-tendance"]], "Imports et lecture des donn\u00e9es": [[12, "imports-et-lecture-des-donnees"], [13, "imports-et-lecture-des-donnees"]], "Imports": [[12, "imports"], [13, "imports"], [14, "imports"]], "Lecture des donn\u00e9es": [[12, "lecture-des-donnees"], [13, "lecture-des-donnees"]], "Soustraction de la tendance": [[12, "soustraction-de-la-tendance"]], "R\u00e9gression lin\u00e9aire": [[12, "regression-lineaire"]], "R\u00e9gression polynomiale par morceaux": [[12, "regression-polynomiale-par-morceaux"]], "Moyennes mobiles": [[12, "moyennes-mobiles"]], "Lin\u00e9aire": [[12, "lineaire"]], "Exponentielle": [[12, "exponentielle"]], "B-splines": [[12, "b-splines"]], "Analyse exploratoire": [[13, "analyse-exploratoire"], [13, "id1"]], "Pr\u00e9sentation": [[13, "presentation"]], "Jeu de donn\u00e9es": [[13, "jeu-de-donnees"]], "Affichage des donn\u00e9es": [[13, "affichage-des-donnees"]], "Candlestick chart (graphique en bougie)": [[13, "candlestick-chart-graphique-en-bougie"]], "Line plot": [[13, "line-plot"]], "Auto-corr\u00e9lation (ACF et PACF)": [[13, "auto-correlation-acf-et-pacf"]], "Auto-corr\u00e9lation (ACF)": [[13, "auto-correlation-acf"]], "Auto-corr\u00e9lation partielle (PACF)": [[13, "auto-correlation-partielle-pacf"]], "Lag plot": [[13, "lag-plot"]], "Probl\u00e9matique": [[13, "problematique"]], "Pr\u00e9diction du cours boursier": [[14, "prediction-du-cours-boursier"]], "SARIMA": [[14, "sarima"]], "Predict new price": [[14, "predict-new-price"]], "Train test split": [[14, "train-test-split"]], "Pr\u00e9diction du prix d\u2019Apple \u00e0 2 mois": [[14, "prediction-du-prix-d-apple-a-2-mois"]], "Tendance": [[14, "tendance"]], "Saisonnalit\u00e9 et stochasticit\u00e9": [[14, "saisonnalite-et-stochasticite"]], "Evaluation de la pr\u00e9diction": [[14, "evaluation-de-la-prediction"]], "XGBoost": [[14, "xgboost"]], "Traitement des donn\u00e9es": [[14, "traitement-des-donnees"]], "Apprentissage des mod\u00e8les": [[14, "apprentissage-des-modeles"], [14, "id1"], [14, "id2"]], "Extra Trees": [[14, "extra-trees"]], "SVM": [[14, "svm"]], "Prophet": [[14, "prophet"]], "Pr\u00e9-traitement pour Prophet": [[14, "pre-traitement-pour-prophet"]], "Pr\u00e9diction": [[14, "prediction"]], "Calcul de la pr\u00e9diction": [[14, "calcul-de-la-prediction"]], "Affichage de la pr\u00e9diction": [[14, "affichage-de-la-prediction"]], "D\u00e9composition": [[14, "decomposition"]], "M\u00e9triques de pr\u00e9diction": [[14, "metriques-de-prediction"]], "Comparaison des mod\u00e8les": [[14, "comparaison-des-modeles"]], "D\u00e9composition : saisonnalit\u00e9": [[15, "decomposition-saisonnalite"]], "Import des donn\u00e9es trait\u00e9es de la tendance": [[15, "import-des-donnees-traitees-de-la-tendance"]], "Graphe de saisonnalit\u00e9 en utilisant l\u2019API statsmodels": [[15, "graphe-de-saisonnalite-en-utilisant-l-api-statsmodels"]], "Saisonnalit\u00e9 mensuelle": [[15, "saisonnalite-mensuelle"]], "Saisonnalit\u00e9 hebdomadaire": [[15, "saisonnalite-hebdomadaire"]], "Graphe de saisonnalit\u00e9 par superposition de s\u00e9ries": [[15, "graphe-de-saisonnalite-par-superposition-de-series"]], "P\u00e9riodogramme": [[15, "periodogramme"]], "Diff\u00e9renciation saisonni\u00e8re": [[15, "differenciation-saisonniere"]], "D\u00e9termination de l\u2019ordre autor\u00e9gressif": [[15, "determination-de-l-ordre-autoregressif"], [15, "id1"]], "D\u00e9termination de l\u2019ordre de moyenne mobile": [[15, "determination-de-l-ordre-de-moyenne-mobile"], [15, "id2"]], "Mod\u00e8le ARIMA": [[15, "modele-arima"]], "D\u00e9termination de l\u2019ordre de diff\u00e9renciation": [[15, "determination-de-l-ordre-de-differenciation"]]}, "indexentries": {"dashboards": [[4, "module-dashboards"]], "dashboards.plot_stocks": [[4, "module-dashboards.plot_stocks"]], "dashboards.utils": [[4, "module-dashboards.utils"]], "matplotlib_init_for_dash() (in module dashboards.utils)": [[4, "dashboards.utils.matplotlib_init_for_dash"]], "module": [[4, "module-dashboards"], [4, "module-dashboards.plot_stocks"], [4, "module-dashboards.utils"], [5, "module-functions"], [5, "module-functions.detrend"], [5, "module-functions.detrend_fancy_plot"], [5, "module-functions.write_detrend_data"], [7, "module-notebooks"]], "plt_dash() (in module dashboards.utils)": [[4, "dashboards.utils.plt_dash"]], "update_candlestick() (in module dashboards.plot_stocks)": [[4, "dashboards.plot_stocks.update_candlestick"]], "update_line_plot() (in module dashboards.plot_stocks)": [[4, "dashboards.plot_stocks.update_line_plot"]], "bsplinesdetrend (class in functions.detrend)": [[5, "functions.detrend.BSplinesDetrend"]], "basedetrend (class in functions.detrend)": [[5, "functions.detrend.BaseDetrend"]], "exponentialmadetrend (class in functions.detrend)": [[5, "functions.detrend.ExponentialMADetrend"]], "linearmadetrend (class in functions.detrend)": [[5, "functions.detrend.LinearMADetrend"]], "linearregressiondetrend (class in functions.detrend)": [[5, "functions.detrend.LinearRegressionDetrend"]], "polynomialregressiondetrend (class in functions.detrend)": [[5, "functions.detrend.PolynomialRegressionDetrend"]], "_fancy_plot() (in module functions.detrend_fancy_plot)": [[5, "functions.detrend_fancy_plot._fancy_plot"]], "fancy_plot() (functions.detrend.basedetrend method)": [[5, "functions.detrend.BaseDetrend.fancy_plot"]], "fit() (functions.detrend.bsplinesdetrend method)": [[5, "functions.detrend.BSplinesDetrend.fit"]], "fit() (functions.detrend.exponentialmadetrend method)": [[5, "functions.detrend.ExponentialMADetrend.fit"]], "fit() (functions.detrend.linearmadetrend method)": [[5, "functions.detrend.LinearMADetrend.fit"]], "fit() (functions.detrend.linearregressiondetrend method)": [[5, "functions.detrend.LinearRegressionDetrend.fit"]], "fit() (functions.detrend.polynomialregressiondetrend method)": [[5, "functions.detrend.PolynomialRegressionDetrend.fit"]], "functions": [[5, "module-functions"]], "functions.detrend": [[5, "module-functions.detrend"]], "functions.detrend_fancy_plot": [[5, "module-functions.detrend_fancy_plot"]], "functions.write_detrend_data": [[5, "module-functions.write_detrend_data"]], "predict() (functions.detrend.basedetrend method)": [[5, "functions.detrend.BaseDetrend.predict"]], "notebooks": [[7, "module-notebooks"]]}})