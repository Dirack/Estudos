#include "listaDinEncadeada.h"

LISTA* cria_lista(){
	LISTA* li = (LISTA*) malloc(sizeof(LISTA));
	if(li != NULL)
		*li = NULL;
	return li;
}

void libera_lista(LISTA* li){
	if(li!=NULL){
		ELEMENTO* no;
		while((*li)!=NULL){
			no = *li;
			*li = (*li)->prox;
			free(no);
		}
		free(li);
	}
}
