# How to create documentation website

# Initialization

## Install sphinx

Add sphinx and Read The Docs (RTD) theme (better than default theme) to dependencies.

```bash
poetry add --group dev sphinx sphinx_rtd_theme
```

## Run the quickstart

Sphinx provides a "quickstart" script to init the docs' website.

1. Go into `📂 docs` folder
2. Run `poetry run sphinx-quickstart`:
    - say _yes_ to separate source & build
    - add project name, etc

## Folder organization

Now you have two subfolders in `📂 docs`:

1) `📂 build` will contain html generated files.
2) `📂 source` which contains:
    - `conf.py`: configuration file for the website
    - `index.rst`: the "home" page of the website, in the `rst` language (similar to Markdown, but different)

In the `📂 docs` folder you have `Makefile` and `make.bat` (for Windows), two files for defining commands.

# Configuration

## Poetry config

Go in `Makefile` & `make.bat`, and edit the command to launch sphinx by replacing `sphinx-build` by `poetry run sphinx-build` (it should be somewhere in the first 10 lines)

## conf.py

### Edit the theme

Replace `html_theme = "alabaster"` by `html_theme = "sphinx_rtd_theme"`

### Add recommended extensions

- autodoc (creating pages from docstring)
- napoleon (support for Numpy docstring)

```python
extensions = ["sphinx.ext.autodoc", "sphinx.ext.viewcode", "sphinx.ext.napoleon"]
```

### Add root folder to path

Root folder needs to be in path, otherwise Sphinx will not find your modules.

Add this code to `conf.py` to add root folder to path:
```python
import sys
from pathlib import Path

# add root folder to path
filepath = Path(__file__).resolve()
root_folder = str(filepath.parent.parent.parent)
sys.path.append(root_folder)
sys.path.append(f"{root_folder}/src")
```

# Build the website

## Add the modules pages to the index

This must be done only once. You must add the `modules` pages to the index: the goal is for your generated files to appear on the website.

Edit `index.rst` and add one line containing `modules.rst` (be careful to respect indentation):
```rst
.. toctree::
   :maxdepth: 2
   :caption: Contents:

   modules.rst
```

## Generate pages from docstring

Go to the 📂 root folder .

Use `sphinx-apidoc` to generate pages from docstring in `src` module, and generate the pages in `📂 docs/source`:

```bash
poetry run sphinx-apidoc src -o docs/source
```

## Create the website

Go to `📂 docs` folder.

### Build the website
Run this:
```bash
make html
```

### Clean output files
Between two builds, run this to clean all output generated (useful if you removed things, so they do not appear in the next build):
```bash
make clean
```

# See the website

Open `docs/build/html/index.html` in your browser and voilà!
