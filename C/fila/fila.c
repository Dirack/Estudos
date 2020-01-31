/*
* fila.c (C)
* 
* Objetivo: Estudo sobre estruturas de dado do tipo fila em linguagem C.
* 
* Site: http://www.dirackslounge.online
* 
* Versão 1.0
* 
* Programador: Rodolfo Dirack 31/01/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct sPessoa
{
	int idade;
	char nome[20+1];
	struct sPessoa *prox;
}PESSOA;

typedef PESSOA* FILA;

void init(FILA* fila){
	*fila = NULL;
}

void inserir(FILA* fila, int idade, char* nome){

	if(*fila == NULL){
		*fila = (FILA) malloc(sizeof(PESSOA));
		if(*fila == NULL) return;
		(*fila)->idade = idade;
		strcpy((*fila)->nome,nome);
		(**fila).prox=NULL;
	}else{
		inserir(&(**fila).prox,idade,nome);
	}
}

void listar(FILA fila){

	if(fila == NULL) return;

	printf("%d %s\n",fila->idade,fila->nome);
	listar(fila->prox);
}

void apagar(FILA* fila){

	PESSOA *tmp = *fila;

	if(*fila==NULL) return;

	*fila = (*fila)->prox;
	free(tmp);
}

int main(void){

	FILA f;
	init(&f);
	//puts("Iniciar:");
	listar(f);
	//puts("Inserir elementos:");
	inserir(&f,21,"Fulano");
	inserir(&f,56,"Beltrano");
	inserir(&f,30,"Cicrano");
	listar(f);
	apagar(&f);
	puts("Apagar um elemento e listar:");
	listar(f);
}
