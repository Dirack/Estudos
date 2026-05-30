from fastapi.testclient import TestClient
import pytest
from estudo import create_app

def test_simple():

    app = create_app()
    client = TestClient(app)
    response = client.get("/")
    assert response.status_code == 200
    assert len(response.json()) == 2