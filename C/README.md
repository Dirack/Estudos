#### Estudos de programação em linguagem C

> Este repositório possui vários estudos em linguagem C, com compilação e correção automatizadas através de arquivos Makefile.

Para compilação dos estudos utilize o comando:

```sh
~$ make x
```

Para correção automática de um estudo, siga os seguintes passos:

- Cada pasta possui um exercício, ou grupo de exercícios descritos em um arquivo 'README.md', leia oque se pede.

- Crie um arquivo novo entitulado 'exercicio.c' onde você resolverá o exercício proposto.

- Adicione o cabeçalho de testes 'test.h', disponível no diretório do exercício, ao seu programa principal.

- Finalize a sua função main do programa principal rodando os testes com o seguinte comando:

```c
MU_RUN_SUITE(test_suite);
MU_REPORT();
```

- Ao finalizar, verifique a correção do exercício com o comando:

```sh
~$ make test
```

