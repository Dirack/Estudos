#include <omp.h>
#include <stdlib.h>
#include <stdio.h>

int fib(int n){
	int x, y;
	if(n<2) return n;
	#pragma omp parallel
	{
		#pragma omp task shared(x)
		x = fib(n-1);
		#pragma omp task shared(y)
		y = fib(n-2);
	}
	return x+y;
}

int main(int argc, char* argv[]){
	printf("%d\n",fib(atoi(argv[1])));
}
