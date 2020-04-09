Brinque com ele! Compile, execute e fique enviando sinais 1 para ele:

```sh
~$ ./sinal.x
Meu pid eh 10719
Valor de a = 0
Valor de a = 1
Valor de a = 2
Valor de a = 0
```

No caso eu abri um novo terminal e nele digitei:

```sh
~$ kill -1 10719
```

Foi o kill que fez o a voltar a ser 0 depois de ter sido 2! Tente você!

O programa também responde aos sinais de interrupção (2) e término (15):

```sh
~$ kill -2 10719
```

```sh
~$ kill -15 10719
```
