# Cabinet Dermatologique - Dr. Asma Mejouar

Site web moderne pour le cabinet dermatologique du Dr. Asma Mejouar, développé avec React et Bootstrap.

## Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **React Router** - Navigation entre les pages
- **Bootstrap 5** - Framework CSS pour le design responsive
- **HTML5/CSS3** - Structure et styles

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Démarrer le serveur de développement :
```bash
npm start
```

Le site sera accessible sur `http://localhost:3000`

## Structure du projet

```
src/
  ├── components/     # Composants réutilisables (Header, Footer)
  ├── pages/         # Pages de l'application (Home, Services, Specialites, Contact)
  ├── App.js         # Composant principal avec le routage
  ├── index.js       # Point d'entrée de l'application
  └── index.css      # Styles globaux
```

## Pages disponibles

- **Accueil** (`/`) - Page d'accueil avec présentation
- **Spécialités** (`/specialites`) - Liste des spécialités
- **Services** (`/services`) - Liste des services proposés
- **Contact** (`/contact`) - Informations de contact et carte

## Build pour production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers seront générés dans le dossier `build/`.

## Notes

- Assurez-vous que le dossier `images/` est présent dans le dossier `public/`
- Les images doivent être accessibles via le chemin `/images/...`


