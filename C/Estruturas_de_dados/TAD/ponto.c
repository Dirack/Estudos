#include <stdlib.h>
#include <math.h>
#include "ponto.h"

struct PONTO{
	float x;
	float y;
};

ponto* pto_init(float x, float y){
	ponto* p = (ponto*) malloc(sizeof(ponto));
	if(p != NULL){
		p->x=x;
		p->y=y;
	}
	return p;
}

void pto_delete(ponto* p){
	free(p);
}

void pto_getvalues(ponto* p, float* x, float* y){
	*x = p->x;
	*y = p->y;
}

void pto_assignvalues(ponto* p, float x, float y){
	p->x = x;
	p->y = y;
}

float pto_distance(ponto* p1, ponto* p2){
	float dx = p1->x - p2->x;
	float dy = p1->y - p2->y;
	return sqrt(dx*dx+dy*dy);
}
