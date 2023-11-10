# Messages de commit

## Utilisation du format des commits conventionnels

- feat (code) : création d'une nouvelle fonctionnalité
- fix (code) : correction d'un bug / erreur de logique
- refactor (code) : remaniement d'une partie de code qui n'ajoute pas de nouveauté  
- docs (documentation) : fichiers readme ou commentaires
- style (code) : espace, retour à la ligne, virgule : black
- perf (code) : amélioration des performances
- chore (tâche) : run une commande, exécuter un notebook
- ci (continuous integration) : initialisation de ci.yml etc.
  
todo: 
- gérer les conflits
- procédure pull requests
- finir les types plus hauts + rajouter les scopes
- apprendre à utiliser debugger

## git pre-commit hook

```bash
#!/bin/bash

# Récupérer les fichiers modifiés
files=$(git diff --cached --name-only --diff-filter=ACM)

# Vérifier si des fichiers sont modifiés
if [ -n "$files" ]; then
  # Exécuter black
  poetry run black $files
  poetry run isort $files
  poetry run nbqa isort $files
  echo $files

  # Convertir la chaîne en un tableau
  IFS=' ' read -r -a files_array <<< "$files"

  # Itérer sur la liste des fichiers et exécuter la commande pour chaque fichier
  for file in "${files_array[@]}"; do
    poetry run nbdev_clean --fname "$file"
  done

  # Récupérer les fichiers modifiés après linting
  modified_files=$(git diff --cached --name-only --diff-filter=ACM)

  # Ajouter les fichiers modifiés après linting pour le commit
  if [ -n "$modified_files" ]; then
    git add $modified_files
  fi
fi
```
