from flask import Flask, jsonify
from pymongo import MongoClient
import os

app = Flask(__name__)

MONGO_URI = os.getenv("MONGO_URI", "mongodb://mongodb:27017/")
client = MongoClient(MONGO_URI)
db = client["ma_base"]

@app.route('/')
def index():
    try:
        client.admin.command('ping')
        return jsonify({
            "status": "success",
            "message": "Connexion à MongoDB réussie !"
        }), 200
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": f"Échec de connexion à MongoDB : {str(e)}"
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)