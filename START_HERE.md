# 🚀 Guide de Démarrage Rapide - Backend Flask

## Étape 1 : Installer Python et les dépendances

```bash
pip install -r requirements.txt
```

## Étape 2 : Configurer Gmail pour l'envoi d'emails

1. Allez sur https://myaccount.google.com/apppasswords
2. Créez un mot de passe d'application
3. Copiez le mot de passe (16 caractères)

## Étape 3 : Définir le mot de passe (Windows PowerShell)

```powershell
$env:EMAIL_PASSWORD="votre_mot_de_passe_ici"
```

## Étape 4 : Démarrer le serveur Flask

```bash
python app.py
```

Vous devriez voir :
```
Base de données initialisée avec succès !
Serveur Flask démarré sur http://127.0.0.1:5000
```

## Étape 5 : Tester le formulaire

1. Ouvrez votre navigateur
2. Allez sur `http://127.0.0.1:5000/contact`
3. Remplissez le formulaire
4. Cliquez sur "Envoyer le message"

## ✅ Vérifier que ça fonctionne

- L'email est envoyé à **asmamejouar@gmail.com**
- Les données sont sauvegardées dans `contact_messages.db`

Pour voir les messages enregistrés :
```bash
python view_messages.py
```

## ⚠️ Important

- Gardez le terminal ouvert pendant que vous testez
- Le serveur doit être démarré pour que le formulaire fonctionne
- Si vous voyez une erreur de connexion, vérifiez que Flask est bien démarré


