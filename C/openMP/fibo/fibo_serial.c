#include <stdlib.h>
#include <stdio.h>

int fib(int n){
	int x, y;
	if(n<2) return n;
	x = fib(n-1);
	y = fib(n-2);
	return x+y;
}

int main(int argc, char* argv[]){
	printf("%d\n",fib(atoi(argv[1])));
}
