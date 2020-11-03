/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre allocação dinâmica personalizada.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 03/11/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#include <stdio.h>
#include "_alloc.h"

int main(void){

	int i;
	int* array;

	array = intalloc(5);

	for(i=0;i<5;i++){
		array[i]=i;
		printf("%d\n",array[i]);
	}

	free(array);
	array = intalloc(-1);
}
