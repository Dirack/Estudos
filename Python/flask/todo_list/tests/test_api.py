from application import create_app
from application.models.Todo import Todo
from application.config import TestConfig
import pytest

@pytest.fixture
def create_test_client():
    app = create_app(TestConfig)
    client = app.test_client()
    yield client

@pytest.fixture
def create_test_task():
    app = create_app(TestConfig)
    client = app.test_client()
    client.post("/add",data={"nome":"test","data":"1992-03-08 12:00:00"})
    yield client

def test_ping_pong(create_test_client):
    response = create_test_client.get("/ping")
    assert response.json == {"message":"pong"}
    assert response.status_code == 200

def test_add(create_test_client):
    response = create_test_client.post("/add",data={"nome":"test","data":"1992-03-08 12:00:00"})
    todo = Todo("test","1992-03-08 12:00:00")
    assert response.data == ("Added task %r to database".encode() % todo)

def test_getall(create_test_task):
    response = create_test_task.get("/all")
    response = list(response.get_json())
    assert len(response) == 1
    assert response[0]['nome'] == 'test'
    assert response[0]['data'] == '1992-03-08 12:00:00'

def test_delete(create_test_task):
    client = create_test_task
    response = client.get("/all")
    response = list(response.get_json())
    taskid = response[0]['id']
    response = client.get(f'/delete/{taskid}')
    assert response.data == 'deleted'.encode()
    assert response.status_code == 200
    response = client.get("/all")
    assert len(list(response.get_json())) == 0

def test_update(create_test_task):
    client = create_test_task
    reponse = client.get("/update?id=1&nome=Fulano&2020-08-08 13:12:30")
    assert reponse.data == 'Updated'.encode()
    response = client.get('/all')
    task = list(response.get_json())[0]
    assert task['id'] == 1
    assert task['nome'] == 'Fulano'