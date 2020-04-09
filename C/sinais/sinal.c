/*
* sinal.c (C)
* 
* Objetivo: Estudo sobre comunicação entre processos, sinais.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 09/04/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/
#include <stdio.h>
#include <signal.h>
#include <unistd.h>
#include <stdlib.h>

int a;

/* Rotina de tratamento de sinais. Ela sempre tem um parâmetro int que será o sinal que a invocou */
void tratahup(int sinal)
{
   a= 0;  // põe 0 na variavel a
}

void trataint(int sinal)
{
	printf("Encerrando...\n");
	exit(2);
}

void trataterm(int sinal)
{
	printf("Encerrando com calma...\n");
	exit(15);
}

int main()
{

   signal(1, tratahup);
   signal(15,trataterm);
   signal(2,trataint);

   printf("Meu pid eh %i\n", getpid());
   while(1) {
      printf("Valor de a = %i\n", a);
      a++;
      sleep(3);
   }
}
