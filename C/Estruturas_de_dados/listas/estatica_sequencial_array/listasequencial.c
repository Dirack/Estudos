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

int tamanho_lista(LISTA* li){
	if(li==NULL)
		return -1;
	else
		return li->qtd;
}

int lista_cheia(LISTA* li){
	if(li==NULL)
		return -1;
	else
		return (li->qtd==MAX);
}

int lista_vazia(LISTA* li){
	if(li==NULL)
		return -1;
	else
		return (li->qtd==0);
}
