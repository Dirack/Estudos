#include<stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct endereco endereco;
typedef struct cliente cliente;

struct endereco {
	char rua[50];
	char cidade[50];
	char estado [40];
	int numero;
};

struct cliente {
	endereco ender;
	int id;
	char nome[50];
	int telefone;
};

void ler_cliente(cliente p[3]  ,int n  )
{

	for(int i =0 ; i<n;i++){
		printf("Digite a Id: ");
		scanf(" %d", &p[i].id);
		printf("Digite a nome: ");
		scanf(" %s",p[i].nome);
		printf("Digite a rua: ");
		scanf(" %s",p[i].ender.rua);
		printf("Digite o Estado: ");
		scanf(" %s",p[i].ender.estado);
		printf("Digite a cidade: ");
		scanf(" %s",p[i].ender.cidade);
		printf("Digite o numero: ");
		scanf(" %d", &p[i].ender.numero);
		printf("Digite o telefone: ");
		scanf(" %d", &p[i].telefone);
	}
        //scanf(" %d", &p[3].id);
};

void buscar_cliente (cliente p[3], int n  )
{
	//int aux;
        // aux = p[3];
	for(int i =0 ; i<n;i++){
        	printf("%d - %s\n",p[i].id ,p[i].nome  );
		printf("%s, %d\n",p[i].ender.rua ,p[i].ender.numero );
		printf("%s, %s\n",p[i].ender.cidade ,p[i].ender.estado );
		printf("%d\n",p[i].telefone );
	}
};

int main(){
	cliente pessoas[3];
	ler_cliente(pessoas,3);
	buscar_cliente(pessoas, 3);
	return 0;
}
