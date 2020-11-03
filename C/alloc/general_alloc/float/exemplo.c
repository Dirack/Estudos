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
	float* array;

	array = floatalloc(5);

	for(i=0;i<5;i++){
		array[i]=(float)i;
		printf("%f\n",array[i]);
	}

	free(array);
	array = floatalloc(-1);
}
