Monkeypatch substitui temporariamente uma dependência durante um teste para tornar o comportamento previsível e isolado.

Monkeypatch é uma técnica de testes usada para substituir temporariamente comportamentos durante a execução do teste.

Com o pytest, a fixture monkeypatch permite alterar:

Funções
Métodos
Variáveis de ambiente
Atributos de objetos

sem modificar o código original.

## Uso mais comum

Mockar chamadas externas:

requests.get()
datetime.now()
os.getenv()

para que o teste não dependa de:

Internet
Banco de dados
API externa
Hora atual

## Exemplo

```python
def get_user():
    return "Rodolfo"

def test_user(monkeypatch):

    monkeypatch.setattr(
        "main.get_user",
        lambda: "Teste"
    )

    assert get_user() == "Teste"
```

Durante o teste:

get_user() → "Teste"

Após o teste:

get_user() → "Rodolfo"

automaticamente.