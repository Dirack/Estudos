/*
* exemplo.c (C)
* 
* Objetivo: Programa original para ser paralelizado com openmp.
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

static long num_steps = 100000;
double step;

int main(void){
	double pi;
	double x;
	double sum=0.0;
	int faixa;

	step = 1/(double)num_steps;
	omp_set_num_threads(4);
	faixa = num_steps/4;

	#pragma omp parallel
	{

	int id=(int)omp_get_thread_num();
	int i;

	#pragma omp barrier

	#pragma omp parallel for reduction (+:sum)
	for(i=id*faixa;i<(id+1)*faixa;i++){
		x=(i+0.5)*step;
		sum += 4.0/(1.0+x*x);
	}
	
	#pragma omp atomic
	pi += step*sum;
	}
	printf("pi=%f\n",pi);
}
