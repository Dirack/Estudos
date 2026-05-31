import pytest
from fastapi.testclient import TestClient
from main import create_app

@pytest.fixture
def client():
    app = create_app()
    with TestClient(app) as client:
        yield client

def test_gethome(client):
    response = client.get("/")
    assert response.status_code == 200
    json = response.json()
    assert json['success'] == 'ok'

def test_getlist(client):
    response = client.get("/list")
    assert len(response.json()) == 0
    response = client.get("/add?id=0&pais=eua")
    json = response.json()
    assert json['success'] == 'ok'

def test_postadd(client):
    response = client.post("/add",
                           json={
                               "id":1,
                               "pais":"brasil"
                           })
    json = response.json()
    assert json['id'] == 1
    assert json['pais'] == 'brasil'

def test_update(client):
    client.post("/add",
                json={
                    "id":0,
                    "pais":"eua"
                })
    client.put("/update",
               json={
                   "id":0,
                   "pais":"brasil"
               })
    response = client.get("/list")
    json = response.json()
    assert json[0] == {'id':0,'pais':'brasil'}

def test_delete(client):
    client.post('/add',
                json={
                    "id":0,
                    "pais":"brasil"
                })
    client.delete("/delete?id=0")
    client.delete("/delete?id=1")
    response = client.get("/list")
    json = response.json()
    assert len(json) == 0
