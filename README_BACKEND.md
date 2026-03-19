# Backend Flask - Site Cabinet Dermatologique

Ce guide explique comment configurer et utiliser le backend Flask pour le formulaire de contact.

## 📋 Prérequis

- Python 3.7 ou supérieur
- pip (gestionnaire de paquets Python)

## 🚀 Installation

### 1. Installer les dépendances

```bash
pip install -r requirements.txt
```

### 2. Configuration de l'email Gmail

Pour que l'envoi d'email fonctionne avec Gmail, vous devez :

1. **Activer l'authentification à deux facteurs** sur votre compte Gmail
2. **Créer un mot de passe d'application** :
   - Allez sur https://myaccount.google.com/apppasswords
   - Sélectionnez "Autre (nom personnalisé)" et entrez "Flask App"
   - Copiez le mot de passe généré (16 caractères)

3. **Définir la variable d'environnement** :

**Sur Windows (PowerShell) :**
```powershell
$env:EMAIL_PASSWORD="votre_mot_de_passe_application"
```

**Sur Windows (CMD) :**
```cmd
set EMAIL_PASSWORD=votre_mot_de_passe_application
```

**Sur Linux/Mac :**
```bash
export EMAIL_PASSWORD="votre_mot_de_passe_application"
```

**Ou créer un fichier `.env` :**
```
EMAIL_PASSWORD=votre_mot_de_passe_application
```

## 🏃 Exécution

### Démarrer le serveur Flask

```bash
python app.py
```

Le serveur démarrera sur `http://127.0.0.1:5000`

### Accéder au site

Ouvrez votre navigateur et allez sur :
- `http://127.0.0.1:5000/contact` pour la page de contact

## 📁 Structure des fichiers

```
site Dr. asma mejouar/
├── app.py                 # Application Flask principale
├── requirements.txt       # Dépendances Python
├── contact_messages.db   # Base de données SQLite (créée automatiquement)
├── contact.html          # Page de contact (modifiée pour utiliser l'API)
└── README_BACKEND.md     # Ce fichier
```

## 🔧 Fonctionnalités

### 1. Formulaire de contact
- Validation des données côté client et serveur
- Envoi d'email automatique au docteur (asmamejouar@gmail.com)
- Sauvegarde dans la base de données SQLite

### 2. Base de données
- Table `messages` avec les champs :
  - id (auto-increment)
  - nom
  - prenom
  - email
  - sujet
  - message
  - date_envoi (timestamp automatique)

### 3. API Endpoints

#### POST `/api/contact`
Envoie un message de contact

**Body (JSON) :**
```json
{
  "nom": "Dupont",
  "prenom": "Jean",
  "email": "jean.dupont@example.com",
  "sujet": "Prise de rendez-vous",
  "message": "Bonjour, je souhaite prendre un rendez-vous."
}
```

**Réponse (succès) :**
```json
{
  "success": true,
  "message": "Votre message a été envoyé avec succès !"
}
```

#### GET `/api/messages`
Récupère tous les messages (pour administration)

## 🗄️ Base de données

La base de données SQLite est créée automatiquement au premier démarrage.

### Voir les messages enregistrés

Vous pouvez utiliser un outil comme **DB Browser for SQLite** ou exécuter :

```python
import sqlite3

conn = sqlite3.connect('contact_messages.db')
cursor = conn.cursor()
cursor.execute('SELECT * FROM messages ORDER BY date_envoi DESC')
messages = cursor.fetchall()

for msg in messages:
    print(f"ID: {msg[0]}")
    print(f"Nom: {msg[1]} {msg[2]}")
    print(f"Email: {msg[3]}")
    print(f"Sujet: {msg[4]}")
    print(f"Message: {msg[5]}")
    print(f"Date: {msg[6]}")
    print("-" * 50)

conn.close()
```

## 🔒 Sécurité

- Les mots de passe sont stockés dans des variables d'environnement
- Validation des données côté serveur
- Protection CORS activée
- Validation de l'email avec regex

## 🐛 Dépannage

### Erreur d'envoi d'email
- Vérifiez que `EMAIL_PASSWORD` est correctement défini
- Vérifiez que le mot de passe d'application Gmail est correct
- Vérifiez votre connexion internet

### Erreur de connexion au serveur
- Vérifiez que Flask est démarré (`python app.py`)
- Vérifiez que le port 5000 n'est pas utilisé par un autre programme
- Vérifiez l'URL dans le JavaScript (`http://127.0.0.1:5000`)

### Erreur de base de données
- Vérifiez les permissions d'écriture dans le dossier
- Supprimez `contact_messages.db` et redémarrez pour recréer la base

## 📝 Notes

- En mode développement (`debug=True`), le serveur redémarre automatiquement à chaque modification
- Pour la production, désactivez le mode debug et utilisez un serveur WSGI comme Gunicorn
- Le fichier `.gitignore` exclut la base de données et les fichiers sensibles

## 🚀 Déploiement en production

Pour déployer en production :

1. Désactivez le mode debug dans `app.py`
2. Utilisez un serveur WSGI (Gunicorn, uWSGI)
3. Configurez un reverse proxy (Nginx)
4. Utilisez HTTPS
5. Configurez les variables d'environnement de manière sécurisée


