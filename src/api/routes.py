"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Programador
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def register():
    name = request.json.get("name", None)
    username = request.json.get("username", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    country = request.json.get("country", None)
    if not name or not username or not email or not password or not country:
        return jsonify({'success':False, 'msg':'Todos los campos son necesarios'})
    email_exist = User.query.filter_by(email=email).first()
    if email_exist:
        return jsonify({'success': False, 'msg':'Ya existe una cuenta registrada con el email '+ email}),400

    new_user = User(name=name, username=username, email=email, password=password, country=country )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'success': True, 'msg':'Usuario registrado correctamente', 'user':new_user.serialize()}),200


