#include <stdio.h>
#include <stdlib.h>
#include "ponto.h"

int main(){
	float d;
	ponto *p, *q;
	//ponto r;
	p = pto_init(10,21);
	q = pto_init(7,25);
	//q->x = 2;
	d = pto_distance(p,q);
	printf("Distance: %f\n",d);
	pto_delete(q);
	pto_delete(p);
}
