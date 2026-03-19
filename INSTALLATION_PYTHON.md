# 🐍 Guide d'Installation de Python et Flask

Python n'est pas installé sur votre système. Suivez ces étapes pour l'installer.

## 📥 Étape 1 : Installer Python

### Option A : Depuis le Microsoft Store (Recommandé pour Windows)

1. Ouvrez le **Microsoft Store**
2. Recherchez "Python 3.12" ou "Python 3.11"
3. Cliquez sur **Installer**
4. Attendez la fin de l'installation

### Option B : Depuis python.org (Alternative)

1. Allez sur https://www.python.org/downloads/
2. Téléchargez la dernière version de Python (3.11 ou 3.12)
3. Exécutez le fichier `.exe` téléchargé
4. **IMPORTANT** : Cochez la case "Add Python to PATH" lors de l'installation
5. Cliquez sur "Install Now"

## ✅ Étape 2 : Vérifier l'installation

Ouvrez un nouveau terminal PowerShell et tapez :

```powershell
python --version
```

Vous devriez voir quelque chose comme : `Python 3.11.x` ou `Python 3.12.x`

## 📦 Étape 3 : Installer Flask et les dépendances

Une fois Python installé, installez Flask :

```powershell
pip install -r requirements.txt
```

Ou installez manuellement :

```powershell
pip install Flask==3.0.0
pip install flask-cors==4.0.0
```

## 🚀 Étape 4 : Démarrer le serveur Flask

```powershell
python app.py
```

## ⚠️ Si vous avez des problèmes

### Problème : "python n'est pas reconnu"

**Solution :**
1. Redémarrez votre terminal après l'installation
2. Vérifiez que Python est dans le PATH :
   - Ouvrez "Variables d'environnement" dans Windows
   - Vérifiez que Python est dans la variable PATH

### Problème : "pip n'est pas reconnu"

**Solution :**
```powershell
python -m pip install -r requirements.txt
```

### Problème : Permission refusée

**Solution :**
```powershell
python -m pip install --user -r requirements.txt
```

## 📝 Alternative : Utiliser py au lieu de python

Sur certains systèmes Windows, utilisez `py` :

```powershell
py --version
py -m pip install -r requirements.txt
py app.py
```

## ✅ Vérification finale

Après installation, testez :

```powershell
python --version
pip --version
python app.py
```

Si tout fonctionne, vous verrez :
```
Base de données initialisée avec succès !
Serveur Flask démarré sur http://127.0.0.1:5000
```


