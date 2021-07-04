## Estudo eliminação de Gauss

Os testes seguem o tutorial sobre eliminação de gauss
do site [Responde aí](https://www.respondeai.com.br/conteudo/calculo-numerico/sistemas-lineares-e-nao-lineares/metodo-da-eliminacao-de-gauss/1192).

O programa 'main.c' faz a resolução do sistema linear abaixo utilizando a eliminação de Gauss:

```
x + y = 15
2x + 4y = 48
```

Cuja solução é x=9 e y=6;

O programa 'main2.c' faz a resolução do sistema linear a seguir utilizando a eliminação de Gauss:

```
x + y + z + w = 4
2x + y -z + w = 1
3x -y -z + 2w = 3
-x +2y + 3z -w = 4
```

Cuja solução é x=-1, y=2, z=0, w=1;

Rodar os exemplos com o comando:

```sh
make
```

O Makefile irá gerar os executáveis já com a lista de símbolos do GDB utlizando a flag -g para o gcc.
