#include <stdio.h>
#include <stdlib.h>

int main(void){
	int j;
	int *vi;
	vi = (int*) malloc(5*sizeof(int));

	for(j=0;j<5;j++)
		vi[j]=j;

	vi = (int*) realloc(vi,10*sizeof(int));

	for(j=0;j<10;j++)
		vi[j]=j;

	for(j=0;j<10;j++)
		printf("%d\n",vi[j]);
}
