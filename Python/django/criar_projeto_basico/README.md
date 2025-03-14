# Criar projeto básico

Para instalar o django utilizando o pip:

```
pip install django
```

Verificar a versão do django

```
django-admin --version
```

Iniciar um projeto django

```
django-admin startproject learning_log .
```

O arquivo 'manage.py' serve para generenciar a aplicação django criada. Utilize os comandos
a seguir

```
python manage.py migrate # Iniciar as migrations do banco de dados
python manage.py help # Obter ajuda
python manage.py runserver # Iniciar o servidor
```

# Criar app básico

Para criar um app no projeto django

```
python manage.py startapp meu_app
```

Depois você precisará registrar o seu app no arquivo 'settings.py' no seu projeto na lista 'INSTALLED_APPS'

```py
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'meu_app',
]
```

Para criar as migrations da aplicação:

```
python manage.py makemigrations meu_app
```

Para rodar as migrations

```
python manage.py migrate # Iniciar as migrations do banco de dados
```

Para rodar o servidor com django utilize:

```
python manage.py runserver
```
