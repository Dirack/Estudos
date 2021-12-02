#include <stdlib.h>
#ifndef _RUNGE_H_
#define _RUNGE_H_

static float x0;
static float y0;
static float h;
static int n;
static float (*f)(float,float);

void runge_kutta_init(float (*ff)(float,float),float xx, float yy, float hh, float ini, float fin){
	x0 = xx;
	y0 = yy;
	h = hh;
	n = (fin-ini)/hh;
	f = ff;
}

//void runge_kutta_close(){
//	free(yk);
//}

float *runge_kutta_step(){

	float k1, k2, k3, k4;
	float h2=h/2.;
	float yy=y0, xx=x0;
	int i;
	float *y;

	y = (float*) malloc(n*sizeof(float));
	y[0]=yy;

	for(i=1;i<n;i++){
		k1=(*f)(xx,yy);
		k2=(*f)(xx+h2,yy+k1/2.);
		k3=(*f)(xx+h2,yy+k2/2.);
		k4=(*f)(xx+h,yy+k3);

		y[i] = yy+h*(k1+2*k2+2*k3+k4)/6.;
		yy=y[i];
		xx+=h;
	}

	return y;
}

#endif
