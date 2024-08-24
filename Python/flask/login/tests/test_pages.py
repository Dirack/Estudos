from application import create_app
from application import User

def test_homepage():
    app = create_app()
    client = app.test_client()

    response = client.get("/")
    assert response.status_code == 200

def test_login():
    app = create_app()
    client = app.test_client()

    response = client.post("/login",data={"login":"fulano","password":"12345"})

    assert response.data == b'Voc\xc3\xaa est\xc3\xa1 logado!'

def test_login_falhou():
    app = create_app()
    client = app.test_client()
    response = client.post("/login",data={"login":"fulano","password":"1234"})
    assert response.data == "Usuário e/ou senha inválidos!".encode()

def test_add():
    app = create_app()
    client = app.test_client()
    response = client.post("/add",data={"login":"test","password":"12345"})
    assert response.status_code == 200
    assert response.data == "Usuário adicionado".encode()