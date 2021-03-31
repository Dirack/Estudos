### Exemplo complexo da barra de progresso no dialog

Este é um exemplo mais complexo de utilização da barra de progresso
do dialog para monitorar o status de execução do comando find que
pré calcula a porcentagem já pesquisada e ecoa o status de execução
para o dialog.

Para executar este exemplo basta rodar o seguinte comando:

```sh
~$ (./exemplo.sh) | dialog --title "Exemplo Complexo" --gauge "Barra de progresso" 10 40
```

Ou rodar o Makefile com o comando 'make'.
