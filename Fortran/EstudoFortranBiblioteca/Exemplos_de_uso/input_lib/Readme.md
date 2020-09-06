# Exemplo de uso de input_lib.f90

>A biblioteca input_lib é um conjunto de funções para tratar argumentos
>passados através da linha de comandos pelo usuário na forma 'chave=valor'

* Utilização com a função intríseca _merge_ do Fortran:

>As funções de input_lib funcionam com o auxílio do operador ternário intrínsico _merge_ do Fortran na
>seguinte forma:

```fortran
res = merge(resultado1,resultado2,condição)
```

>Se a condição é verdadeira o _resultado1_ é atribuido a variável _res_
>Se a condição é falsa o _resultado2_ é atribuido a variável _res_

* O funcionamento das funções GET é simples. Exemplo:

```fortran
pr = merge(.GETREAL."pr",10,.GET."pr")
```

>Se 'pr' foi passado a função .GET. retorna _true_ e a função .GETREAL retorna o valor passado
>que será atribuido à variável _pr_
>Se _pr_ não foi passado .GET. retorna _false_ e o valor 10 é atribuído a variável _pr_

* Você pode rodar o exemplo de uso no arquivo _teste.f90_ da seguinte maneira:

>Compile o programa com _make_ (~$ representa o prompt do terminal):

```shell
~$ make
```

>Rode o programa passando os seguintes parâmetros:

```shell
~$ ./teste i=1 r=20 nome="Rodolfo Dirack"
```
