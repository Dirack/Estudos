#include <stdio.h>
#include <stdbool.h>

bool iszero(int i){
	if(i==0)
		return true;
	return false;
}

int add1(int* i){
	return (*i)++;
}

void zero(int* i){
	*i=0;
}
