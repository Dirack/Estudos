from flask import Flask, request, render_template
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer,primary_key=True)
    login = db.Column(db.String)
    password = db.Column(db.String)

    def __init__(self,login,password):
        self.login = login
        self.password = password
    
def create_app():

    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///estudo.db'

    @app.route("/")
    def index():
        return "Hello, world!"
    
    @app.route("/login",methods=['GET','POST'])
    def login():
        if request.method == 'POST':
            login = request.form['login']
            user_by_name = User.query.filter_by(login=login).first()
            if user_by_name is not None and user_by_name.password == request.form['password']:
                return "Você está logado!"
            else:
                return "Usuário e/ou senha inválidos!"
        return render_template("login.html")
    
    @app.route("/add",methods=['POST'])
    def add():
        login = request.form['login']
        password = request.form['password']
        user = User(login,password)
        db.session.add(user)
        db.session.commit()
        return "Usuário adicionado", 200
    
    db.init_app(app)

    with app.app_context():
        db.create_all()
    
    return app