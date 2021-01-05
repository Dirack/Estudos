/*
* main.c (C)
* 
* Objetivo: Código de exemplo para ser usado com o GDB.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 04/01/2021
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#include "soma.h"
#include <stdlib.h>

int main(void){

	float sum;
	float sub;
	float* f = (float*) malloc(8);

	sum = soma(1.0,1.5);

	sub = subtracao(2.0,1.0);
}
