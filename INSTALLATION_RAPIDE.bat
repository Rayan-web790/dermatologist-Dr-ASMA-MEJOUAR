@echo off
echo ========================================
echo Installation de Python et Flask
echo ========================================
echo.

echo Verification de Python...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Python n'est pas installe!
    echo.
    echo Veuillez installer Python depuis:
    echo 1. Microsoft Store (recherchez "Python")
    echo 2. Ou https://www.python.org/downloads/
    echo.
    echo IMPORTANT: Cochez "Add Python to PATH" lors de l'installation
    echo.
    pause
    exit /b 1
)

echo Python est installe!
python --version
echo.

echo Installation de Flask et des dependances...
python -m pip install --upgrade pip
python -m pip install -r requirements.txt

if %errorlevel% neq 0 (
    echo.
    echo Erreur lors de l'installation. Essayez manuellement:
    echo python -m pip install Flask flask-cors
    pause
    exit /b 1
)

echo.
echo ========================================
echo Installation terminee avec succes!
echo ========================================
echo.
echo Pour demarrer le serveur Flask:
echo python app.py
echo.
pause

