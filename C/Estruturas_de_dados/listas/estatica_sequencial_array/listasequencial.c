#include "listasequencial.h"
#include <stdlib.h>

struct lista{
	int qtd;
	struct aluno dados[MAX];
};

LISTA* cria_lista(){
	LISTA* li;
	li = (LISTA*) malloc(sizeof(struct lista));
	if(li!=NULL)
		li->qtd=0;
	return li;
}

void libera_lista(LISTA* li){
	free(li);
}
