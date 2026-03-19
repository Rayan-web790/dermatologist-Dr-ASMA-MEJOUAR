# 🚀 Instructions pour Démarrer le Serveur Flask

## ⚠️ IMPORTANT : Vous DEVEZ démarrer Flask avant d'utiliser le formulaire

## Méthode 1 : Double-clic (Facile)

1. **Double-cliquez sur le fichier `start_flask.bat`**
2. Une fenêtre noire va s'ouvrir avec le message :
   ```
   Base de données initialisée avec succès !
   Serveur Flask démarré sur http://127.0.0.1:5000
   ```
3. **GARDEZ CETTE FENÊTRE OUVERTE** (ne la fermez pas !)
4. Ouvrez votre navigateur
5. Allez sur : **http://127.0.0.1:5000/contact**

## Méthode 2 : Terminal PowerShell

1. Ouvrez PowerShell
2. Allez dans le dossier du projet :
   ```powershell
   cd "C:\Users\ULTRAPC\Desktop\site Dr. asma mejouar"
   ```
3. Démarrez Flask :
   ```powershell
   python app.py
   ```
4. **GARDEZ CETTE FENÊTRE OUVERTE**
5. Ouvrez votre navigateur sur : **http://127.0.0.1:5000/contact**

## ✅ Comment savoir que ça marche ?

Quand Flask est démarré, vous verrez dans le terminal :
```
Base de données initialisée avec succès !
Serveur Flask démarré sur http://127.0.0.1:5000
 * Running on http://0.0.0.0:5000
```

## ❌ Erreur "Erreur de connexion au serveur" ?

Cela signifie que Flask n'est pas démarré. Faites ceci :

1. **Fermez toutes les fenêtres de terminal**
2. **Double-cliquez sur `start_flask.bat`**
3. **Attendez de voir le message "Serveur Flask démarré"**
4. **Rechargez la page dans votre navigateur** (F5)

## 🔍 Vérification

Pour vérifier que Flask fonctionne :
- Ouvrez : http://127.0.0.1:5000/contact
- Si la page s'affiche normalement = Flask fonctionne ✅
- Si vous voyez une erreur = Flask n'est pas démarré ❌

## 📝 Note

- **Ne fermez PAS la fenêtre du terminal** pendant que vous testez
- Pour arrêter Flask : appuyez sur `Ctrl + C` dans le terminal
- Chaque fois que vous voulez tester, vous devez redémarrer Flask


