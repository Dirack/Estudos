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
