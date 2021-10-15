#include <stdio.h>
#include <omp.h>

int soma_ate_1000(){

	int i, sum=0;
	//printf("id=%d\n",id);
	for(i=0;i<10000000;i++)
		sum += i;
	return sum;
}

int main(void){

	omp_set_num_threads(4);

#pragma omp parallel
{
	int id = omp_get_thread_num();
#pragma omp sections
	{
#pragma omp section
	soma_ate_1000();
#pragma omp section
	soma_ate_1000();
#pragma omp section
	soma_ate_1000();
#pragma omp section
	soma_ate_1000();
	}
}

}
