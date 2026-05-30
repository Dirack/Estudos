from fastapi import FastAPI
from pydantic import BaseModel

class Pais(BaseModel):
    id: int
    pais: str

paises = [{"id":1,"pais":"brasil"},{"id":2,"pais":"eua"}]

def create_app():
    app = FastAPI()

    @app.get("/")
    def root():
        return paises

    @app.post("/add")
    def add_pais(pais: Pais):
        id = pais.id
        pais2add = pais.pais
        paises.append({"id":id,"pais":pais2add})
        return {"success":"ok","added":pais}
    
    return app

app = create_app()
