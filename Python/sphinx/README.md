# O que é o Sphinx?

O Sphinx é uma ferramenta que gera documentação automaticamente a partir de:

- Código Python
- Docstrings
- Arquivos Markdown/ReStructuredText
- Tipos e assinaturas das funções

Ele é muito usado em projetos Python profissionais.

Instalação
pip install sphinx

Criar projeto:

sphinx-quickstart docs

Isso gera:

docs/
├── conf.py
├── index.rst
├── Makefile
└── _static/

O arquivo mais importante: conf.py

É o equivalente ao "settings" do Sphinx.

Exemplo:

project = "PaleoScan Metadata"
author = "Rodolfo Neves"
release = "1.0.0"s

Como gerar os .rst automaticamente

É para isso que existe o comando:

sphinx-apidoc

No seu projeto, execute a partir da raiz:

sphinx-apidoc -o docs calculo

Isso vai gerar algo parecido com:

docs/
├── calculo.rst
├── modules.rst
├── index.rst
└── ...
Depois inclua modules.rst

No index.rst:

.. toctree::
   :maxdepth: 2

   modules

O arquivo modules.rst passa a ser o ponto de entrada para toda a API.

Se você adicionar novos módulos

Por exemplo:

calculo/
├── exemplo.py
├── geometria.py
├── estatistica.py
└── __init__.py

Execute novamente:

sphinx-apidoc -f -o docs calculo

O -f força a atualização.

O tema Read the Docs é provavelmente o mais popular do ecossistema Python porque tem navegação lateral, busca integrada e um visual bem mais moderno que o tema padrão.

1. Instale o tema

No seu ambiente virtual:

pip install sphinx-rtd-theme

Verifique:

pip show sphinx-rtd-theme
2. Atualize o conf.py

Em docs/conf.py, adicione:

html_theme = "sphinx_rtd_theme"