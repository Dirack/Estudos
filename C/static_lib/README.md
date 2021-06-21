# Estudo sobre bibliotecas estáticas em C

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
