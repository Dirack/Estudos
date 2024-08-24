from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from application.blueprints.hello_world.helloworld import helloworld_bp
from application.blueprints.ping_pong.ping_pong import ping_pong_bp
from application.blueprints.api.crud import crud_bp
from application.config import ProdConfig, TestConfig

db = SQLAlchemy()

from application.models import Todo

def create_app(config_obj=ProdConfig):

    app = Flask(__name__)

    app.config.from_object(config_obj)

    db.init_app(app)

    app.register_blueprint(helloworld_bp)
    app.register_blueprint(ping_pong_bp)
    app.register_blueprint(crud_bp)
    
    with app.app_context():
        db.create_all()
    
    return app