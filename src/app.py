import os
from flask import Flask, jsonify, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_jwt_extended import JWTManager  # Importamos JWTManager
from flask_cors import CORS  # Importamos CORS para habilitar Cross-Origin Resource Sharing
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands

# Determina si el entorno es de desarrollo o producción
ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')

# Creación de la aplicación
app = Flask(__name__)
app.url_map.strict_slashes = False

# Configuración de la base de datos
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Configuración de JWT
app.config["JWT_SECRET_KEY"] = "your_secret_key"  # Cambia esto por una clave secreta segura

# Inicializa las extensiones
db.init_app(app)
MIGRATE = Migrate(app, db, compare_type=True)

# Inicializa el JWTManager
jwt = JWTManager(app)

# Habilitar CORS para todas las rutas
CORS(app, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True)

# Configuración adicional
setup_admin(app)
setup_commands(app)

# Registrar los endpoints de la API con un prefijo 'api'
app.register_blueprint(api, url_prefix='/api')

# Manejar errores y serializarlos como un objeto JSON
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# Generar sitemap con todos los endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# Cualquier otro endpoint que no sea de la API se maneja como un archivo estático
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # Evitar caché
    return response

# Esto solo se ejecuta si se corre `$ python src/main.py`
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
