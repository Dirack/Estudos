from application import create_app

def test_home():

    app = create_app()
    client = app.test_client()
    response = client.get("/")
    assert response.status_code == 200
    assert response.data == "Hello, world!".encode()