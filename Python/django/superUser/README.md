# Criar e administrar usuários no django admin

Para acessar a página admin do django você irá utilizar a URL da aplicação no endpoint '/admin'.

Daí para criar o superuser você utiliza

```
python manage.py createsuperuser
```

Preencha as informações necessárias e crie o usuário. Basta fazer o login para acessar a página.

Se você tiver criado algum model novo, precisará registrá-lo para poder visualizar na página admin. Para tanto,
importe e registre este model no arquivo 'admin.py' como no exemplo a seguir (Registro do model Topic):

```py
from django.contrib import admin
from meu_teste.models import Topic

# Register your models here.

admin.site.register(Topic)
```
