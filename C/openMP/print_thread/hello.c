/*
* hello.c (C)
* 
* Objetivo: Exemplo de uso de paralelização simples com openmp.
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

#include <omp.h>
#include <stdio.h>

int main(void){

#pragma omp parallel
	{
	int ID=omp_get_thread_num();
	printf("hello(%d)\n",ID);
	}

}

