from flask import Blueprint, request,jsonify
from datetime import datetime

crud_bp = Blueprint("crud",__name__)

@crud_bp.route("/add",methods=['POST'])
def add():
    nome = request.form['nome']
    data = request.form['data']
    from application import db
    from application.models.Todo import Todo
    todo = Todo(nome,data)
    db.session.add(todo)
    db.session.commit()
    return "Added task %r to database" % todo

@crud_bp.route("/all")
def all():
    from application import db
    from application.models.Todo import Todo
    tasks = Todo.query.all()
    tasks = [{"id":t.id,"nome":t.nome,"data":datetime.strftime(t.data,'%Y-%m-%d %H:%M:%S'),"done":t.done} for t in tasks]
    return jsonify(tasks)

@crud_bp.route("/delete/<id>")
def delete(id):
    from application import db
    from application.models.Todo import Todo
    Todo.query.filter_by(id=id).delete()
    db.session.commit()
    return "deleted"

@crud_bp.route("/update")
def update():
    id = request.args.get("id")
    nome = request.args.get("nome")
    data = request.args.get("data")
    from application import db
    from application.models.Todo import Todo
    if nome is not None:
        Todo.query.filter_by(id=id).update({"nome":nome})
    if data is not None:
        data = datetime.strptime(data,'%Y-%m-%d %H:%M:%S')
        Todo.query.filter_by(id=id).update({"data":data})
    db.session.commit()
    return 'Updated'