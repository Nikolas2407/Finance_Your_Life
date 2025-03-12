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

print("Base de datos inicializada")

# Registro de usuarios
@app.route('/registro', methods=['POST'])
def registro():
    try:
        data = request.json
        db.collection('usuarios').add(data)
        return jsonify({"status": "Registro exitoso"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

app.route('/inicio',methods=['GET'])
def inicio():
    try:
        data=request.args.get("documento")
        usuario=db.collection('usuarios').where("documento","=",data).stream()
        usuer=next(usuario,None)
        if usuer:  
            return jsonify({"status":"usuario encontrado"}), 200
        else:
            return jsonify({"status":"No existe el usuario"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 400




