#### Estudo depuração do programa quadrado com GDB

O programa quadrado.c retorna o quadrado dos n primeiros
números, onde n é um número inteiro passado pelo usuário.
Este programa contém erros propositais para serem observados
com o gdb.

* Alguns comandos úteis:

- display VAR; monitorar a variável VAR
- call quadrado(2); chamar a função quadrado
- continue; continuar até o próximo breakpoint
- break 10; criar breakpoint na linha 10
- break quadrado; criar breakpoint na função quadrado
