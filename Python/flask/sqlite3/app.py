from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///estudantes.sqlite3'

db = SQLAlchemy(app)

class Estudante(db.Model):
    id = db.Column(db.Integer,primary_key=True,autoincrement=True)
    nome = db.Column(db.String(150))

    def __init__(self, nome):
        self.nome = nome

@app.route("/")
def index():
    estudantes = Estudante.query.all()
    return render_template("index.html", estudantes=estudantes)

@app.route('/add',methods=['GET','POST'])
def add():
    estudante = Estudante(request.form['nome'])
    db.session.add(estudante)
    db.session.commit()
    return "tudo certo!"

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)