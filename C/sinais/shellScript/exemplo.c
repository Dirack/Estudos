/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre comunicação de processos.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 11/04/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <unistd.h>
#include <stdio.h>
#include <time.h>
#include <signal.h>
#include <stdlib.h>

int paused;

void mensagem(int signum)
{
      time_t tp;
      time(&tp);
      printf("%s", ctime(&tp));
}

void pausar(int signum){
	printf("Pausando...\n");
	paused=1;
}

void voltar(int signum){
	printf("Voltando...\n");
	paused=0;
}

void finalizar(int signum){
	printf("Finalizando calmamente...\n");
	exit(0);
}

void main( )
{
	paused=0;
     signal(SIGALRM, mensagem);
     signal(SIGTSTP,pausar);
     signal(SIGHUP,voltar);
     signal(15,finalizar);
     printf("*** inicio do programa\n");
     while (1)
           {
	   	if(paused==0)
                	alarm(5);
                 pause( );
           }
}


