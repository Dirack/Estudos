# Estudo depuração do programa quadrado com GDB Scripts

Neste exemplo, utilizamos a flag '--command' para carregar os comandos listados no arquivo 'gdb_script' no GDB.
Estes scripts do GDB pemitem a execução automatizada de comandos de depuração.

No arquivo 'Scripting_GDB.pdf' temos um tutorial com exemplos de utilização de scripts GDB para depuração e vários
comandos e estratégias.

O programa 'quadrado.c' retorna o quadrado dos n primeiros
números, onde n é um número inteiro passado pelo usuário.
Este programa contém erros propositais para serem observados
com o gdb.

Utilize o programa make para compilar o programa já no formato aceito pelo GDB (compilação com a opção -g) e rodar
o programa com o gdb script carregado:

```
make
```

## Alguns comandos úteis:

- display VAR; monitorar a variável VAR
- call quadrado(2); chamar a função quadrado
- continue; continuar até o próximo breakpoint
- break 10; criar breakpoint na linha 10
- break quadrado; criar breakpoint na função quadrado
