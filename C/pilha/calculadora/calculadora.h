#include "pilha.h"

int calculadora(int n1, int n2, int op){
	if(op==1){
		return n1+n2;
	}else if(op==2){
		return n1-n2;
	}else if(op==3){
		return n1*n2;
	}else{
		return n1/n2;
	}

}

void implementaLogicaCalculadora(PILHA* p1, PILHA* p2, PILHA* po, PILHA* re){
	
	int resultado, n1, n2, op;

	while(!empty(*po)){
		n1=top(*p1);
		if(n1<0){
			n1=top(*re);
			pop(re);
		}
		n2=top(*p2);
		if(n2<0){
			n2=top(*re);
			pop(re);
		}
		op=top(*po);
		resultado = calculadora(n1,n2,op);
		push(re,resultado);
		pop(p1);
		pop(p2);
		pop(po);
	}

}
