# Rotas get e post no flask

Exercício de criação de app simples com Flask. Rotas básicas e métodos GET e POST.

Neste exercício crie um app simples e teste a API como abaixo.

Para obter a lista de países:

```
curl -i http://127.0.0.1:5000/countries
```

Para fazer o post de um país na lista:

```
curl -i http://127.0.0.1:5000/countries \
-X POST \
-H 'Content-Type: application/json' \
-d '{"name":"Germany", "capital": "Berlin", "area": 357022}'
```
