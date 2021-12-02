#include <stdio.h>
#include "runge.h"

float funcao(float x, float y){return 1.;}

int main(void){

	float x, *y;
	int i;
	const float h=0.1;
	const float x0=0., y0=0.;
	const float inicial=0.;
	const float final=1.;

	runge_kutta_init(funcao,x0,y0,h,inicial,final);
	y = runge_kutta_step();

	for(i=0;i<n;i++){
		printf("%f %f\n",x,y[i]);
		x+=h;
	}
	
}
