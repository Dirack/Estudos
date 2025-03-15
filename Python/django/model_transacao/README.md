# Exemplo model com foreign key, laço for e if

[:arrow_up: Voltar a home](https://github.com/Dirack/Estudos/tree/master/Python/django#django)

Este exemplo expande os exemplos de listagem com laço for e acrescenta o conhecimento sobre a utilização do if.

A utilização é bem simples. Criamos um view que fornece uma lista apenas para exemplificar.

```py
from django.shortcuts import render
import datetime

# Create your views here.

def index(request):

    data = {}
    data['transacoes'] = ['t1','t2','t3']
    data['now'] = datetime.datetime.now()
    return render(request,'index.html',data)
```

A listagem e a filtragem utilizando o bloco if é feita como segue.

```html
<h1>Estudo</h1>

<p>Agora são {{now}}</p>

<ul>
    {% for transacao in transacoes %}

    {% if transacao == "t1" %}
    <li><b>{{transacao}}</b></li>
    {% else %}
    <li>{{transacao}}</li>
    {% endif %}
    {% endfor %}
</ul>
```
