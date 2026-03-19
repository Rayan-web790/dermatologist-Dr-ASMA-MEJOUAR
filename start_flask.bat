@echo off
echo ========================================
echo Demarrage du serveur Flask
echo ========================================
echo.
echo Le serveur va demarrer sur http://127.0.0.1:5000
echo.
echo Gardez cette fenetre ouverte pendant que vous testez le site.
echo.
echo Pour arreter le serveur, appuyez sur Ctrl+C
echo.
echo ========================================
echo.

cd /d "%~dp0"
python app.py

pause


