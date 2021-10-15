#include <stdio.h>
#include <omp.h>

int soma_ate_100(){

	int i;
	int sum=0;

	for(i=0;i<1000;i++)
		sum += i;
	return sum;
}

int soma_ate_1000(){

	int i, sum=0;

	for(i=0;i<10000000;i++)
		sum += i;
	return sum;
}

int main(void){

	soma_ate_1000();
	soma_ate_1000();
	soma_ate_1000();
	soma_ate_1000();

}
