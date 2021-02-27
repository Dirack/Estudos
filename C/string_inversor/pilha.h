#include <stdlib.h>

struct sNo{
	int n;
	struct sNo* prox;
};

typedef struct sNo NO;

typedef NO* PILHA;

void init(PILHA* p){
	*p = NULL;
}

int empty(PILHA p){
	return (p==NULL);
}

void push(PILHA* p, int num){
	NO* tmp;
	tmp = (NO*) malloc(sizeof(NO));
	if(tmp==NULL) return;
	tmp->n = num;
	tmp->prox = *p;
	*p=tmp;
}

int top(PILHA p){
	if(empty(p)) return -1;
	return p->n;
}

void pop(PILHA* p){

	NO* tmp = *p;
	if(empty(*p))return;
	*p = (*p)->prox;
	free(tmp);
}

void conversor(int n){
	switch(n){
		case -95: printf("á"); break;
		case -83: printf("í"); break;
		case -87: printf("é"); break;
		case -77: printf("ó"); break;
		case -70: printf("ú"); break;
	}
}

void print(PILHA p){
	if(empty(p)) return;
	if(p->n<0){
		conversor(p->n);
	}else{
		printf("%c",p->n);
	}
	print(p->prox);
}
