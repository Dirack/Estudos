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

## Instalação de wheels local

## Baixe os `.whl` do ambiente (pip download)

```
pip download -r requirements.txt -d whls

```

## Modo 100% offline (recomendado)

Depois, no outro ambiente:

```
pip install --no-index --find-links=/meus_whls nome_do_pacote

pip install --no-index --find-links=whls -r requirements.txt -t site-packages
```

## Ver todas as configurações do pip

pip config list

Exemplo:

global.index-url='https://pypi.org/simple'
global.timeout='60'
Ver de onde as configurações foram carregadas
pip config debug

Esse é um dos mais úteis.

Ele mostra algo parecido com:

env_var:
global:
  /etc/pip.conf
site:
  /home/rodolfo/venv/pip.conf
user:
  /home/rodolfo/.config/pip/pip.conf

e informa quais arquivos existem e quais estão sendo usados.

Ver o repositório (index) utilizado
pip config get global.index-url

ou:

pip config list

Normalmente:

https://pypi.org/simple

que é o índice oficial do Python Package Index.

Ver detalhes da instalação
pip debug

Mostra:

plataforma
Python
SSL
certificados
compatibilidade de wheels

Muito útil para diagnosticar problemas.

Ver onde os pacotes são instalados
python -m site

Exemplo:

USER_SITE: '/home/rodolfo/.local/lib/python3.12/site-packages'
USER_BASE: '/home/rodolfo/.local'

## Comandos para diagnosticar ambientes

Quando algo estranho acontece (pacote não encontrado, pip instalando no lugar errado, virtualenv confuso), eu geralmente executo:

which python
which pip
pip --version
pip config debug
python -m site

Com esses quatro comandos você praticamente enxerga:

qual Python está ativo
qual pip está ativo
onde os pacotes são instalados
quais configurações do pip estão sendo aplicadas
qual repositório está sendo usado para download

Isso costuma resolver a maioria dos problemas de ambiente Python.