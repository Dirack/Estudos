# Estudo sobre o método das diferenças finitas para calcular derivadas

Este é um exemplo sobre como calcular a derivada de uma função utilizando o método das diferenças finitas em C.
As fórmulas utilizadas foram retiradas deste [Tutorial na Wikipédia](https://pt.wikipedia.org/wiki/M%C3%A9todo_das_diferen%C3%A7as_finitas).

Basta expandir as funções em série de Taylor e depois fazer a diferença para ter uma boa aproximação da derivada:

![taylor](https://github.com/Dirack/Estudos/blob/master/C/diferencas_finitas/res/taylor.svg)

![taylor2](https://github.com/Dirack/Estudos/blob/master/C/diferencas_finitas/res/taylor2.svg)

A fórmula da derivada:

![mdf](https://github.com/Dirack/Estudos/blob/master/C/diferencas_finitas/res/mdf.svg)

Para compilar e rodar o exemplo, basta utilizar o comando a seguir:

```sh
make
```

Para visualizar os gráficos das funções no Python3 utilizando a biblioteca matplotlib, basta rodar o comando:

```sh
make view
```

## Dependências

- Instalação do gcc:

```sh
sudo apt install gcc
```

- Instalação do Python3:

```sh
sudo apt install python3
```

- Instalação do pip3:

```sh
sudo apt install python3-pip
```

- Instalação do módulo matplotlib no Python3:

```sh
sudo pip3 install matplotlib
```
