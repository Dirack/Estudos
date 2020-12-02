#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <ctype.h>
 
/*estabelecendo estrutura para receber um caractere*/
struct lista {
    char caractere;
    struct lista *prox;
};
typedef struct lista list;
 
/*função para inserir uma nova estrutura na lista*/
list *insere (list *l, char c) {
    list *novo = (list*)malloc(sizeof(list));
    novo->caractere = c;
    novo->prox = l;
    return novo;
}
/*função para fazer a ordenação de caracteres utilizando um vetor*/
list *ordenar (list *L) {
    list *p;
    int cont_dig, cont_caract, cont;
    int i=0, j=0;
    for(p = L; p != NULL; p= p->prox) {
        if(isdigit(p->caractere))
            cont_dig++;
        else
            cont_caract++;
        }
    char *vetor = (char*) malloc(cont_dig*sizeof(char)); /*Alocando espaço na memória para o vetor de digitos*/
    char *vetor2 = (char*) malloc(cont_caract*sizeof(char)); /*Alocando espaço na memória para vetor de caracteres*/
    for(p = L; p != NULL; p=p->prox) {
        if(isdigit(p->caractere)) {      
            vetor[i]= p->caractere;
            i++;
        }
        else {
            vetor2[j]= p->caractere;
            j++;
        }
    }
    list *organizado;
    organizado = NULL;
    for (cont = 0; cont < i; cont++) {
        organizado = insere(organizado,vetor[cont]);
    }
    for (cont = 0; cont < j; cont++) {
        organizado = insere(organizado,vetor2[cont]);
    }
    return organizado;      
}
 
 
/*função para imprimir*/
void imprime(list *L) {
    list *p = L;
    while(p!= NULL) {
        printf("%s",p->caractere);
        p= p->prox;
    }
}
 
int main () {
    char caractere;
    int i, numero;
    list *l;
    printf("Digite o numero de caracteres que voce deseja ordenar:\n");
	scanf("%d", &numero);
    for(i = 0; i < numero; i++) {
        printf("Digite um caractere:\n");
		scanf("%s", &caractere);
        l = insere(l, caractere);
    }
    l = ordenar(l);
    imprime(l);
    printf("\n");
    system("pause");
}
