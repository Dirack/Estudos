#include <stdio.h>
#include <stdlib.h>

#ifndef _ALLOC_H_
#define _ALLOC_H_

void* sf_alloc(size_t n, size_t size){
	void* ptr;
	size*=n;
	if(size<=0){
		fprintf(stderr,"Illegal allocation (%lu bytes)\n",size);
		exit(1);
	}
	ptr = malloc(size);
	if(NULL==ptr){
		fprintf(stderr,"Cannot allocate %lu bytes\n",size);
		exit(2);
	}
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

#endif
