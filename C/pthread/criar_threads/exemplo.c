/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre criação de threads com
* biblioteca pthreads do C.
* 
* Site: http://www.dirackslounge.online
* 
* Versão 1.0
* 
* Programador: Rodolfo Dirack 19/12/2019
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

void* threadimpl (void* arg){
/* Recebe um string e imprime na tela, depois dorme 1s*/
	int i;

	for(i=0; i<10; i++){
		puts(arg);
		sleep(1);
	}

	return NULL;
}

int main(void){pthread_t t1, t2;
	pthread_create(&t1,NULL,threadimpl, "fizz");
	pthread_create(&t2,NULL,threadimpl,"buzzz");
	pthread_exit(NULL); /* espera as threads terminarem e encerra o programa */
	puts("bye");
	return 0;
}
