/*
* pilha.c (C)
* 
* Objetivo: Estudo sobre pilhas de pares chave=valor em linguagem C.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 06/04/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Par{
	char *chave;
	char *valor;
	struct Par* prox;
} par;

typedef struct Par* tabela;

void init(tabela *t){
	*t=NULL;
}

void push(tabela* t, char* c, char* v){
	par* tmp;
	tmp = (par*)malloc(sizeof(par));
	if(tmp==NULL) return;
	tmp->chave = c;
	tmp->valor = v;
	tmp->prox = *t;
	*t = tmp;
}

int isempty(tabela t){
	return (t==NULL);
}

void print(tabela t){
	if(isempty(t)){
		printf("\n");
		return;
	}
	printf("Chave=%s Valor=%s\n",t->chave,t->valor);
	print(t->prox);
}

void topo(tabela t){
	if(isempty(t)) printf("(NULL)");
	printf("Topo=(%s,%s)\n",t->chave,t->valor);
}

void pop(tabela* t){
	par* tmp = *t;
	if(isempty(*t)) return;
	*t = (*t)->prox;
	free(tmp);
}

int main(void){
	tabela tab;
	init(&tab);
	push(&tab,"key1","val1");
	push(&tab,"key2","val2");
	topo(tab);
	print(tab);
	pop(&tab);
	topo(tab);
	print(tab);

}
