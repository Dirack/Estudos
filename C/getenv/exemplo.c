/*
* exemplo.c (C)
* 
* Objetivo: Exemplo de leitura de variaveis de ambiente do Shell com C.
* A função getenv retorna NULL se a variável não for encontrada.
* LINES e COLUMNS precisam ser exportadas no Shell antes da execução do
* programa com o comando 'export LINES' e 'export COLUMNS'. 
*
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 09/02/2021
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#include <stdio.h>
#include <stdlib.h>

int main () {
   printf("PATH : %s\n", getenv("PATH"));
   printf("HOME : %s\n", getenv("HOME"));
   printf("ROOT : %s\n", getenv("ROOT"));
   printf("LINES : %s\n", getenv("LINES"));
   printf("COLUMNS : %s\n", getenv("COLUMNS"));

   return(0);
}
