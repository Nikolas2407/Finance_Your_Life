from flask import Flask, request, jsonify
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, firestore

# Inicializar Flask
app = Flask(__name__)
CORS(app)  # Permitir CORS para la conexión con React

# Configurar Firebase
cred = credentials.Certificate("./conexion.json")  # Asegúrate de colocar tu archivo JSON
firebase_admin.initialize_app(cred)
db = firestore.client()
collection_name = "formularios"

