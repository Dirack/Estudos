# Estudo sobre models

[:arrow_up: Voltar a home](https://github.com/Dirack/Estudos/tree/master/Python/django#django)

Este é um exemplo extra de criação dos models do banco de dados no django. Os models foram criados em 'meuapp/models.py'.

Se você tiver criado algum model novo, precisará registrá-lo para poder visualizar na página admin. Para tanto,
importe e registre este model no arquivo 'admin.py' como no exemplo a seguir (Registro do model Topic):

```py
from django.contrib import admin
from meu_teste.models import Topic

# Register your models here.

admin.site.register(Topic)
```

Lembre de fazer as migrações dos novos models do app e depois do projeto.

```
python manage.py makemigrations meuapp
python manage.py migrate
```
