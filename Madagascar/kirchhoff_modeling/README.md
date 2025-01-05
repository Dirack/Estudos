# Modelagem Kirchhoff: Reproducible paper e jupyter notebook

> Este é um exemplo de modelagem Kirchhoff do Madagascar feito como um reproducible paper e um tutorial do jupyter notebook

[Documentação oficial: Reproducible papers as Jupyter notebooks](https://ahay.org/blog/?s=jupyter)

## Gerar exemplo com Reproducible Paper

Para gerar o paper deste exemplo consulte o estudo sobre [Reproducible papers do Madagascar com o pacote SEGTex].
O SConstruct na pasta raíz deste exemplo é responsável por rodar o experimento completo de modelagem na pasta 'scons'
e depois gerar o reproducible paper.

## Gerar o tutorial com Jupyter Notebook

Na pasta 'scons' há um jupyter notebook chamado 'modeling_Tutorial.ipynb' que é um tutorial de modelagem Kirchhoff no Madagascar.
A forma mais eficiente de reproduzir este tutorial é gerando um ambiente virtual com o jupyter e numpy instalados e depois rodar o
tutorial no jupyter notebooks (no navegador).

Para tanto, gere o ambiente virtual com o seguinte comando:

```
python3 -m venv myenv
```

Depois utilize o script gerado em 'myenv/bin/activate' para ativar o ambiente virtual:

```
source myenv/bin/activate
```

Então, instale as dependências com pip:

```
pip install jupyter numpy
```

Daí é só executar o jupyter e rodar o tutorial em 'modeling_Tutorial.ipynb':

```
jupyter notebook
```
