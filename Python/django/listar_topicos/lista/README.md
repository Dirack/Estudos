# Rotas dinâmicas, laço for e listagem

[:arrow_up: Voltar a home](https://github.com/Dirack/Estudos/tree/master/Python/django#django)

Para criar rotas dinâmicas, basta adicionar o endpoint com o slug na lista de paths (rotas) do app (em 'urls.py' dentro do app).
Esta rota pode receber um 'name' também como no exemplo.

```py
    path('topic/<topic_id>/',views.getTopic, name='gettopic')
```


Para criar listagens, você terá que passar os valores lidos do banco de dados para a página a partir de um contexto.
Primeiro, faça o import dos models na 'views.py'. Cada model possui um 'objects', um manager que permite abstrair várias queries
ao banco de dados. Assim, você pode fazer a querie e obter os dados para depois passar as informações ao contexto como a seguir:

```py
from django.shortcuts import render
from .models import Topic, Entry

# Create your views here.

def index(request):
    topics = Topic.objects.order_by('id')
    context = {"topics":topics}
    return render(request,'index.html',context)

def getTopic(request, topic_id):
    topic = Topic.objects.get(id=topic_id)
    entries = topic.entry_set.order_by('-id')
    context = {'topic':topic,'entries':entries}
    return render(request,"listagem.html",context)
```

O consumo da lista é feito no template como segue:

```html
<ul>
    {% for entry in entries %}
    <li>{{ entry.entry }}, sou um {{entry.topic}} de id {{entry.id}}</li>
    {% endfor %}
</ul>
```
