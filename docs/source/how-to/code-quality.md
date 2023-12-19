# Code quality tutorials

## Black for code formatting
```bash
poetry run black --check .
```

## Linting with flake8 (pep8 convention)
flake8 checks for the respect of code quality.  
It doesn't modify the files. 
```bash
poetry run flake8 .
poetry run nbqa flake8 .
```
nbqa stands for notebook quality assurance

## Sort imports with isort
Run isort in check mode.  
nbqa stands for notebook quality assurance and allows compatibility with notebooks.
```bash
poetry run isort --check .
poetry run nbqa isort --check --float-to-top .
```
