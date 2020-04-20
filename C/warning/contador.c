/*
* contador.c (C)
* 
* Objetivo: Estudo sobre fflush, printf e sleep.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 20/04/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main(){

	int i;

	for(i=0;i<100;i++){
		sleep(1);
		printf("Contar 100 segundos: %d\r\r",i);
		(void)fflush(stdout);
	}
}
