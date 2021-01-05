#define MAX 100

struct aluno{
	int matricula;
	char nome [30];
	float n1,n2,n3;
};

typedef struct lista LISTA;

LISTA* cria_lista();

void libera_lista(LISTA* li);

int tamanho_lista(LISTA* li);

int lista_cheia(LISTA* li);

int lista_vazia(LISTA* li);
