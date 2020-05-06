/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre a função sinal definida em uma macro em C.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 06/05/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#include <assert.h>

#define signal(t) ((t<0)? (-1.) : (1.))

float randomNumber(){
	int u;
	float ur;

	u = rand()%100;
	ur = (float)u/100;

	return ur-0.5;
}

int main(void)
{

	int i;
	float u;
	float su;

	srand(time(NULL));

	for(i=1;i<10;i++){
		u = randomNumber();
		su = signal(u);
		(u<0)? assert(su==(-1.)) : assert(su==1.);
		printf("signal(%f)=%f\n",u,su);
	}

}
