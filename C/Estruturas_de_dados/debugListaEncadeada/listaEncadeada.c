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

void inverteVetorDigitos(char* v, int length){

	char tmp[length];
	int i;

	if(length<=1) return;

	/* copia vetor para tmp */
	for(i=0;i<length;i++){
		tmp[i]=v[i];
	}

	/* inverte vetor v */
	for(i=0;i<length;i++){
		v[i]=tmp[length-i-1];
	}	
}

/*função para fazer a ordenação de caracteres utilizando um vetor*/
list *ordenar (list *L) {
    list *p;
    int cont_dig=0, cont_caract=0, cont=0;
    int i=0, j=0;
    char* vetor;
    char* vetor2;
    for(p = L; p != NULL; p= p->prox) {
        if(isdigit(p->caractere))
            cont_dig++;
        else
            cont_caract++;
        }
    if(cont_dig>0)
    	vetor = (char*) malloc(cont_dig*sizeof(char)); /*Alocando espaço na memória para o vetor de digitos*/

    if(cont_caract>0)
    	vetor2 = (char*) malloc(cont_caract*sizeof(char)); /*Alocando espaço na memória para vetor de caracteres*/
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
    
    /* Se o usuário passou dígitos, inverter a ordem dos dígitos passados */
    if(cont_dig>0)
	inverteVetorDigitos(vetor,cont_dig);

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
    if(p==NULL) return;
    
    printf("%c",p->caractere);
    imprime(p->prox);
}
 
void flush_in()
/* Função que limpa o buffer do teclado para sistemas operacionais
 * baseados no UNIX. 
 * Retirada de https://www.inf.pucrs.br/~pinho/LaproI/Fflush/CorrigeScanfGets.html */
{
   int ch;

   while( (ch = fgetc(stdin)) != EOF && ch != '\n' ){}
} 

void init(list** l){

	*l = NULL;
}

int main () {
    char caractere;
    int i, numero;
    list *l;

	init(&l);

    printf("Digite o numero de caracteres que voce deseja ordenar:\n");
	scanf("%d", &numero);
	flush_in();
    for(i = 0; i < numero; i++) {
        printf("Digite um caractere:\n");
	scanf("%c", &caractere);
	flush_in();
	printf("=> %c\n",caractere);
        l = insere(l, caractere);
    }
    l = ordenar(l);
    imprime(l);
    printf("\n");
    //system("pause");
}
