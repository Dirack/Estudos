# Estudo sobre utilização e gerenciamento de pacotes com pip

Tutorial: https://www.freecodecamp.org/news/python-requirementstxt-explained/

Para criar um arquivo das dependências da aplicação com o pip:

```
pip freeze > requirements.txt
```

Daí basta instalar as dependências com o comando:

```
pip install -r requirements.txt
```

Para listar os pacotes instalados utilize:

```
pip list
```
