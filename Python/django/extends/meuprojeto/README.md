# Extend templates html e links

[:arrow_up: Voltar a home](https://github.com/Dirack/Estudos/tree/master/Python/django#django)

Este é um estudo básico sobre exends de templates no django. Basicamente, com o extends você poderá criar um template
base e irá reutilizar nos demais templates. Dá para criar um template padrão e ir alterando apenas a seção de conteúdo.

Neste exemplo, criamos o template base em 'base.html' como segue:

```html
<h1>Meu título</h1>

{% block content %}{% endblock content %}
```

Com o extends, extendemos o template base em 'index.html'.

```html
{% extends "base.html" %}

{% block content %}
<p>Meu conteúdo aleatório do site.</p>
{% endblock content %}
```

Assim, o título irá aparecer no template extendido com a seção de conteúdo será expandida no template base.

Para criar links também é fácil com o django. Você irá usar o nome listado na variável 'name' do path
da url que você definiu em 'urls.py' dentro do seu app.

```py
path('',views.index,name='index'),
```

Com este name, você pode utilizar a função 'url' no template como segue para cirar o link.

```html
<a href="{% url 'index' %}">Voltar</a>
```
