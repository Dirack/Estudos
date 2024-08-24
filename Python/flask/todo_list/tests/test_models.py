from application import create_app
from application.models.Todo import Todo
from datetime import datetime

def test_todo():
    taskname = 'test'
    taskdate = '1992-03-08 12:00:00'
    todo = Todo(taskname,taskdate)
    assert todo.nome == taskname
    assert datetime.strftime(todo.data,'%Y-%m-%d %H:%M:%S') == taskdate
    assert todo.done == False
