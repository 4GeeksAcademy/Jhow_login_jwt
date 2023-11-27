from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(200), default='', nullable=True)
    apellido = db.Column(db.String(200), default='', nullable=False)
    rut = db.Column(db.Integer, unique=True, nullable=True)
    email = db.Column(db.String(200), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    telefono = db.Column(db.Integer, unique=True, nullable=False)
    fecha_de_nacimiento = db.Column(db.String(200), unique=False, nullable=True)
    rubro = db.Column(db.String(200), unique=True, nullable=True)
    is_active = db.Column(db.Boolean(), default=True, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
           
        }

class UserBuscador(db.Model):
    __tablename__ = 'user_buscador'  
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(200), default='', nullable=True)
    apellido = db.Column(db.String(200), default='', nullable=False)
    rut = db.Column(db.Integer, unique=True, nullable=True)
    email = db.Column(db.String(200), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    telefono = db.Column(db.Integer, unique=True, nullable=True)
    fecha_de_nacimiento = db.Column(db.String(200), unique=False, nullable=True)
    is_active = db.Column(db.Boolean(), default=True, nullable=False)

    def __repr__(self):
        return f'<UserBuscador {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
        }