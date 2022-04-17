# Estudo sobre bibliotecas estáticas em C

[Tutorial original](https://medium.com/@meghamohan/everything-you-need-to-know-about-libraries-in-c-e8ad6138cbb4)

Use '/usr/local/lib' para guardar a biblioteca estática e 
'/usr/local/include' para guardar o header.

Para fazer a compilação utilize:

```sh
gcc -c *.c # compilar código fonte
ar -rc liballoc.a *.o # gerar biblioteca
```

Ao compilar o arquivo principal, lembre de linkar:

```sh
gcc main.c -lalloc -o main.x
```

Utilize o comando a seguir para visualizar o conteúdo da lib:

```sh
ar -t lib/liballoc.a
```

E o comando abaixo para visualizar a lista de símbolos:

```sh
nm lib/liballoc.a
```

Para criar um index para a biblioteca utilize o comando ranlib. Este comando cria um header na biblioteca com os símbolos dos conteúdos do arquivo objeto, isto ajuda o compilador a referenciar os símbolos rapidamente.

```sh
ranlib liballoc.a
```
