from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import sqlite3
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os
import urllib.request
import urllib.parse
import json
from dotenv import load_dotenv

# Charger les variables d'environnement depuis le fichier .env
load_dotenv()

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)  # Permet les requêtes depuis le frontend

# Configuration de l'email
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
EMAIL_USER = "vladrayan7@gmail.com"  # Email de test (destinataire)
EMAIL_PASSWORD = "motdepasseapplicationgoogle"  # Mot de passe depuis variable d'environnement

# Configuration Telegram
TELEGRAM_BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN")
TELEGRAM_CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID")

# Initialiser la base de données
def init_db():
    conn = sqlite3.connect('contact_messages.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL,
            prenom TEXT NOT NULL,
            email TEXT NOT NULL,
            sujet TEXT NOT NULL,
            message TEXT NOT NULL,
            date_envoi TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

# Fonction pour envoyer un message Telegram
def send_telegram_message(nom, prenom, email, sujet, message):
    if TELEGRAM_BOT_TOKEN == "VOTRE_TOKEN_ICI" or TELEGRAM_CHAT_ID == "VOTRE_CHAT_ID_ICI":
        print("Telegram non configuré.")
        return False
    
    try:
        # Préparer le message
        texte = f"<b>🔔 Nouveau Message de Contact</b>\n\n"
        texte += f"👤 <b>Nom :</b> {nom} {prenom}\n"
        texte += f"📧 <b>Email :</b> {email}\n"
        texte += f"📁 <b>Sujet :</b> {sujet}\n\n"
        texte += f"💬 <b>Message :</b>\n{message}"
        
        url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
        params = {
            'chat_id': TELEGRAM_CHAT_ID,
            'text': texte,
            'parse_mode': 'HTML'
        }
        
        data = urllib.parse.urlencode(params).encode('utf-8')
        req = urllib.request.Request(url, data=data)
        
        with urllib.request.urlopen(req) as response:
            return response.getcode() == 200
    except Exception as e:
        print(f"Erreur Telegram : {str(e)}")
        return False

# Fonction pour envoyer un email
def send_email(nom, prenom, email, sujet, message):
    try:
        # Créer le message
        msg = MIMEMultipart()
        msg['From'] = EMAIL_USER
        msg['To'] = EMAIL_USER  # Envoi à rayan2003.de@gmail.com pour test
        msg['Subject'] = f"Contact Cabinet Dermatologique - {sujet}"
        
        # Corps de l'email
        body = f"""
        Nouveau message de contact reçu :
        
        Nom : {nom}
        Prénom : {prenom}
        Email : {email}
        Sujet : {sujet}
        
        Message :
        {message}
        
        ---
        Ce message a été envoyé depuis le formulaire de contact du site web.
        """
        
        msg.attach(MIMEText(body, 'plain', 'utf-8'))
        
        # Connexion au serveur SMTP
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASSWORD)
        text = msg.as_string()
        server.sendmail(EMAIL_USER, EMAIL_USER, text)
        server.quit()
        
        return True
    except Exception as e:
        print(f"Erreur lors de l'envoi de l'email : {str(e)}")
        return False

# Fonction pour sauvegarder dans la base de données
def save_to_db(nom, prenom, email, sujet, message):
    db_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'contact_messages.db')
    try:
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()
        # S'assurer que la table existe (au cas où init_db aurait raté)
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nom TEXT NOT NULL,
                prenom TEXT NOT NULL,
                email TEXT NOT NULL,
                sujet TEXT NOT NULL,
                message TEXT NOT NULL,
                date_envoi TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        cursor.execute('''
            INSERT INTO messages (nom, prenom, email, sujet, message)
            VALUES (?, ?, ?, ?, ?)
        ''', (nom, prenom, email, sujet, message))
        conn.commit()
        conn.close()
        return True
    except Exception as e:
        print(f"CRITICAL: Erreur lors de la sauvegarde en base ({db_path}) : {str(e)}")
        # Tentative de sauvegarde de secours dans un fichier texte si la DB échoue
        try:
            log_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'fallback_messages.txt')
            with open(log_path, 'a', encoding='utf-8') as f:
                f.write(f"{datetime.now()}: {nom} {prenom} ({email}) - {sujet}: {message}\n")
            return True # On considère que c'est "sauvegardé" si le fichier texte a fonctionné
        except:
            return False

# Routes pour servir les pages HTML
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/contact')
def contact():
    return send_from_directory('.', 'contact.html')

@app.route('/services')
def services():
    return send_from_directory('.', 'services.html')

@app.route('/specialites')
def specialites():
    return send_from_directory('.', 'specialites.html')

@app.route('/faq')
def faq():
    return send_from_directory('.', 'faq.html')

# Servir les fichiers statiques (CSS, JS, images)
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

# Route API pour recevoir le formulaire de contact
@app.route('/api/contact', methods=['POST'])
def handle_contact():
    try:
        data = request.get_json()
        
        # Validation des données
        nom = data.get('nom', '').strip()
        prenom = data.get('prenom', '').strip()
        email = data.get('email', '').strip()
        sujet = data.get('sujet', '').strip()
        message = data.get('message', '').strip()
        
        # Vérifier que tous les champs sont remplis
        if not all([nom, prenom, email, sujet, message]):
            return jsonify({
                'success': False,
                'message': 'Tous les champs sont obligatoires.'
            }), 400
        
        # Validation de l'email
        import re
        if not re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', email):
            return jsonify({
                'success': False,
                'message': 'Adresse email invalide.'
            }), 400
        
        # Sauvegarder dans la base de données
        if not save_to_db(nom, prenom, email, sujet, message):
            return jsonify({
                'success': False,
                'message': 'Erreur lors de la sauvegarde des données.'
            }), 500
        
        # Envoyer l'email
        email_sent = send_email(nom, prenom, email, sujet, message)
        
        # Envoyer sur Telegram
        telegram_sent = send_telegram_message(nom, prenom, email, sujet, message)
        
        if email_sent or telegram_sent:
            return jsonify({
                'success': True,
                'message': 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
            }), 200
        else:
            # Même si l'email n'a pas été envoyé, les données sont sauvegardées
            return jsonify({
                'success': True,
                'message': 'Votre message a été enregistré. Nous vous contacterons bientôt.'
            }), 200
            
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Une erreur est survenue : {str(e)}'
        }), 500

# Route pour voir les messages (optionnel - pour l'administration)
@app.route('/api/messages', methods=['GET'])
def get_messages():
    try:
        conn = sqlite3.connect('contact_messages.db')
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM messages ORDER BY date_envoi DESC')
        messages = cursor.fetchall()
        conn.close()
        
        # Convertir en format JSON
        result = []
        for msg in messages:
            result.append({
                'id': msg[0],
                'nom': msg[1],
                'prenom': msg[2],
                'email': msg[3],
                'sujet': msg[4],
                'message': msg[5],
                'date_envoi': msg[6]
            })
        
        return jsonify({'success': True, 'messages': result}), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Erreur : {str(e)}'
        }), 500

init_db()
print("Base de données initialisée avec succès !")

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    print(f"Serveur Flask démarré sur http://0.0.0.0:{port}")
    app.run(debug=True, host='0.0.0.0', port=port)

