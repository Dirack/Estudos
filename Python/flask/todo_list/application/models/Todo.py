from application import db
from datetime import datetime

class Todo(db.Model):
    __tablename__ = 'todolist'
    id = db.Column(db.Integer,primary_key=True)
    nome = db.Column(db.String)
    data = db.Column(db.DateTime)
    done = db.Column(db.Boolean,default=False)

    def __init__(self,nome,data):
        self.nome = nome
        self.data = datetime.strptime(data, '%Y-%m-%d %H:%M:%S')
        self.done = False
    
    def __repr__(self) -> str:
        return "<Todo %r %r %d>" % (self.nome,self.data,self.done)