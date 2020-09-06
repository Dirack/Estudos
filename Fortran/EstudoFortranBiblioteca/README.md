# LIBDIRACK (Biblioteca Fortran)

> Biblioteca de funções e programas em FORTRAN 90/03 com definição de
> tipos derivados, classes, programas e funções.
> Consulte os exemplos de uso na pasta _Exemplo\_de\_uso_.

## Instalação

Para instalar basta executar o arquivo _config_ nesta mesma pasta. Exemplo:

```shell
~$ chmod 777 ./config # Dê permissão de execução
~$ ./config # Instalação
```

## Descrição das bibliotecas

* polar_lib.f90 

Definir o tipo POLAR, número complexo em coordenadas polares, define também as operações fundamentais como soma,
 subtração, multiplicação e atribuição do tipo POLAR para o tipo primitivo COMPLEX (nativo do FORTRAN)

* vector_lib.f90

Define o tipo VECTOR, vetor de 3 componentes x, y, z; define operações fundamentais como soma, subtração, 
multiplicação e atribuição do tipo VECTOR para um array de dimensão 3 do tipo REAL.

* math_lib.f90

Define constantes físicas e matemáticas para facilitar a programação dos problemas físicos. As constantes desta
biblioteca tem os nomes terminados com '\_', exemplo 'g\_' que é o valor da gravidade no equador.

* input_lib.f90

Define as funções get para lidar com entradas a partir da linha de comandos. Serão entradas do tipo CHARACTER
e devem ser convertidas para os tipos primitivos INTEGER e REAL. 
