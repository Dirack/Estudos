/*
* main.c (C)
* 
* Objetivo: Estudo sobre o método Runge-Kutta em C.
* Passa a função através de um ponteiro de função, x0, y0
* e h para a função runge_kutta_step que calcula o y a partir
* do método Runge-Kutta.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 02/01/2021
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#include <stdio.h>
#include "runge.h"

/* Use x0=0 y0=2 */
//float funcao(float x, float y){return y-x;}

/* Use x0=0 y0=0 */
//float funcao(float x, float y){return y*y+1;}

/* Use x0=0 y0=1 */
float funcao(float x, float y){return y;}

int main(void){

	const float final=1.0;
	const float inicial=0.0;
	const float h=0.1;
	int n,i;
	const float x0=0.0;
	const float y0=1.0;
	float x,y;

	n=(final-inicial)/h;
	x=x0;
	y=y0;

	printf("x=%f y=%f\n",x,y);

	for(i=0;i<n;i++){

		y = runge_kutta_step(funcao,x,y,h);
		x += h;
		printf("x=%f y=%f\n",
			x,
			y);
	}
}
