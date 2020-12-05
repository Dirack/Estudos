#include <stdio.h>
#include <stdlib.h>

#ifndef _LISTA_DIN_ENCADEADA_H_
#define _LISTA_DIN_ENCADEADA_H_

struct aluno{
	int matricula;
	char nome[30];
	float n1,n2,n3;
};

typedef struct elemento* LISTA;

struct elemento{
	struct aluno dados;
	struct elemento *prox;
};

typedef struct elemento ELEMENTO;

LISTA* cria_lista();

void libera_lista(LISTA* li);

#endif
