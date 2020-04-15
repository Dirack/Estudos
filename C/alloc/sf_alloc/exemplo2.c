/*
* exemplo2.c (C)
* 
* Objetivo: Estudo sobre funções de alocação dinâmica.
* 
* Site: http://www.dirackslounge.online
* 
* Versão 1.0
* 
* Programador: Rodolfo Dirack 26/01/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <stdlib.h>

void *sf_alloc(size_t n, size_t size){

	void* ptr;

	ptr = malloc(n*size);
	if(NULL==ptr)
		fprintf(stderr,"%s: Não foi possível alocar %ld bytes de memória:",__FILE__,n*size);
	return ptr;
}

float *sf_floatalloc(size_t n){

	float* ptr;
	ptr = (float*) sf_alloc(n,sizeof(float));
	return ptr;
}

int main(void){

	float* t;

	t = sf_floatalloc(1);

	printf("t: %ld bytes\n",sizeof(t));

	exit(0);

}
