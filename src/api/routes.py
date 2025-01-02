"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS, cross_origin
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)

# Configure CORS for the API blueprint
CORS(api, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

@api.route('/signup', methods=['POST', 'OPTIONS'])
@cross_origin()
def signup():
    if request.method == 'OPTIONS':
        return '', 204  # Response for preflight requests
    
    body = request.get_json()
    
    if not body.get("email") or not body.get("password"):
        return jsonify({"error": "Missing required fields"}), 400
    
    # Check if the user already exists
    user = User.query.filter_by(email=body["email"]).first()
    if user:
        return jsonify({"error": "User already exists"}), 400
    
    # Create new user
    try:
        new_user = User(
            email=body["email"],
            password=body["password"],  # Password stored without hashing
            is_active=True
        )
        db.session.add(new_user)
        db.session.commit()
        
        return jsonify({"message": "User created successfully"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@api.route('/login', methods=['POST', 'OPTIONS'])
@cross_origin()
def login():
    if request.method == 'OPTIONS':
        return '', 204  # Response for preflight requests
    
    body = request.get_json()
    
    if not body.get("email") or not body.get("password"):
        return jsonify({"error": "Missing required fields"}), 400
    
    # Check user credentials
    user = User.query.filter_by(email=body["email"], password=body["password"]).first()  # Direct password comparison
    if not user:
        return jsonify({"error": "Invalid credentials"}), 401
    if not user.is_active:
        return jsonify({"error": "User is not active"}), 401
    
    # Generate JWT token
    access_token = create_access_token(identity=user.id)
    return jsonify({
        "token": access_token,
        "user_id": user.id,
        "email": user.email
    }), 200

@api.route('/validate', methods=['GET', 'OPTIONS'])
@jwt_required()
@cross_origin()
def validate_token():
    if request.method == 'OPTIONS':
        return '', 204  # Response for preflight requests
    
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    return jsonify(user.serialize()), 200

@api.route('/logout', methods=['POST', 'OPTIONS'])
@jwt_required()
@cross_origin()
def logout():
    if request.method == 'OPTIONS':
        return '', 204  # Response for preflight requests
    
    return jsonify({"message": "Logged out successfully"}), 200
