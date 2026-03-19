"""
Script pour visualiser les messages de contact enregistrés dans la base de données
"""
import sqlite3
from datetime import datetime

def view_messages():
    try:
        conn = sqlite3.connect('contact_messages.db')
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM messages ORDER BY date_envoi DESC')
        messages = cursor.fetchall()
        conn.close()
        
        if not messages:
            print("Aucun message enregistré.")
            return
        
        print("\n" + "="*80)
        print(f"📧 MESSAGES DE CONTACT ({len(messages)} message(s))")
        print("="*80 + "\n")
        
        for msg in messages:
            print(f"ID: {msg[0]}")
            print(f"👤 Nom complet: {msg[1]} {msg[2]}")
            print(f"📧 Email: {msg[3]}")
            print(f"🏷️  Sujet: {msg[4]}")
            print(f"💬 Message:")
            print(f"   {msg[5]}")
            print(f"📅 Date: {msg[6]}")
            print("-" * 80)
            print()
            
    except sqlite3.Error as e:
        print(f"Erreur lors de la lecture de la base de données : {e}")

if __name__ == '__main__':
    view_messages()


