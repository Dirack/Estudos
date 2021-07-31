/*
* exemplo.c (C)
* 
* Objetivo: Programa paralelizado com openmp.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 31/07/2021
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <omp.h>
#define NUM_THREADS 4

static long num_steps = 100000;
double step;

int main(void){
	double pi=0.0;
	int i;
	double sum[4];
	int tam_faixa;

	omp_set_num_threads(NUM_THREADS);

	step = 1/(double)num_steps;

	tam_faixa = num_steps/NUM_THREADS;

	#pragma omp parallel
	{
		int init;
		int i;
		int final;
		double x;
		int id=(int) omp_get_thread_num();

		sum[id]=0.0;
		init=id*tam_faixa;
		final=init+tam_faixa;

		for(i=init;i<final;i++){
			x=(i+0.5)*step;
			sum[id] += 4.0/(1.0+x*x);
		}
	}

	for(i=0;i<NUM_THREADS;i++)
		pi += sum[i]*step;
	printf("pi=%f\n",pi);
}
