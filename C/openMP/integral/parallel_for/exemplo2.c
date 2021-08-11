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

static long num_steps = 100000;
double step;

int main(void){
	int i;
	double pi;
	double sum=0.0;

	step = 1/(double)num_steps;

#pragma omp parralel
{
	double x;
	#pragma parallel for reduction (+:sum)
	for(i=0;i<num_steps;i++){
		x=(i+0.5)*step;
		sum = sum+4.0/(1.0+x*x);
	}
}
	pi = step*sum;
	printf("pi=%f\n",pi);
}
