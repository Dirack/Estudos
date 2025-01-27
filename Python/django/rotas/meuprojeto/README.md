# Rotas e views

Crie uma pasta 'templates' dentro do app para adicionar as páginas HTML de template.

Registre a sua view em 'views.py' como no exemplo:

```py
def index(request):
    return render(request,'index.html')
```

Crie um arquivo 'urls.py' no seu app:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('',views.index)
]
```

Depois importe as urls do app para o projeto utilizando 'include':

```py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('meuapp.urls'))
]
```
