/*
* _alloc.h (C)
* 
* Objetivo: Allocador dinâmico personalizado.
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

#include <stdlib.h>
#include <stdio.h>

void* sf_alloc(size_t n, size_t size){

	void* ptr;
	size *= n;

	if(0>=size)
		fprintf(stderr,"%s: illegal allocation (%lu bytes)\n",__FILE__,size);

	ptr = malloc(size);
	if(ptr==NULL)
		fprintf(stderr,"%s: cannot allocate %lu bytes\n",__FILE__,size);

	return ptr;
}

char* sf_charalloc(int n){
        char* ptr;
        ptr = (char*) sf_alloc(n,sizeof(char));
        return ptr;
}

void *sf_realloc(void* ptr, size_t n, size_t size){
        void* ptr2;

        ptr2 = realloc(ptr,n*size);
        if(NULL==ptr2){
                fprintf(stderr,"Cannot reallocate %lu bytes",n*size);
                exit(1);
        }
        return ptr2;
}

