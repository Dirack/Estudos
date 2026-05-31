from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

class Pais(BaseModel):
    id: int
    pais: str

paises = []

origins = [
    'http://localhost:3000'
]

def create_app():
    app = FastAPI()

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*']
    )

    @app.get("/")
    def home():
        return {"success":"ok"}
    
    @app.get("/list")
    def get_list():
        return paises
    
    @app.get('/add')
    def add_get(id: int, pais: str):
        new_pais = {"id":id,"pais":pais}
        paises.append(new_pais)
        return {"success":"ok","added":new_pais}
    
    @app.post("/add")
    def add_post(item: Pais):
        new_pais = item
        paises.append({"id":new_pais.id,"pais":new_pais.pais})
        return new_pais
    
    @app.put("/update")
    def update_pais(item: Pais):
        global paises
        if len(paises) == 0:
            paises.append(item)
        else:
            updated = [
                {"id": item.id, "pais": item.pais}
                if p['id'] == item.id
                else p
                for p in paises
            ]
            paises = updated
        return {"success":"ok"}
    
    @app.delete("/delete")
    def delete_pais(id: int):
        global paises
        updated = [p for p in paises if p['id'] != id]
        paises = updated
        return {"success":"ok"}
    
    return app

app = create_app()

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app)