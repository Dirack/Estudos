#include <stdio.h>
#include <stdlib.h>
#include "_alloc.h"

int main(void){

	int i;
	float* array;

	array = (float*) alloc(5,sizeof(float));

	for(i=0;i<5;i++){
		array[i]=(float)i;
		printf("%f\n",array[i]);
	}

	free(array);
	array = (float*) alloc(5,-1);
}
