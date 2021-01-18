/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre responder a SIGSEGV em c.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 17/01/2021
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#include <signal.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <errno.h>
#include <string.h>

void tratasegfalt(int sinal){
	fprintf(stderr,"%s: Erro de segmentação...\n%s\nPID=%d\n",
	__FILE__,strerror(errno),getpid());

	// this is the trick: it will trigger the core dump
	signal(sinal, SIG_DFL);
}

int main(void){
	
	int* i = NULL;
	signal(SIGSEGV,tratasegfalt);

	*i = 50;
}
