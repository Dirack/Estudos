# Vários models e chave estrangeira

Se você tiver criado algum model novo, precisará registrá-lo para poder visualizar na página admin. Para tanto,
importe e registre este model no arquivo 'admin.py' como no exemplo a seguir (Registro do model Topic):

```py
from django.contrib import admin
from meu_teste.models import Topic

# Register your models here.

admin.site.register(Topic)
```
