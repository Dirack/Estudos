/*
* user.h (C)
* 
* Objetivo: Definição do tipo 'usuário' para o sistema de cadastro.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 17/01/2021
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct USER* user;

struct USER{
	char nome[20];
	int idade;
	int id;
};

user user_init(){

	user u;
	char nome[20];
	int i;

	u = (user) malloc(sizeof(*u));
	setbuf(stdin,NULL);
	printf("Qual o seu nome? ");
	fgets(nome, 21*sizeof(char),stdin);
	for(i=0;i<sizeof(nome);i++){
		if(nome[i]=='\n'){
			strncpy(u->nome,nome,i);
			break;
		}
	}

	printf("Qual a sua idade? ");
	scanf("%d",&(u->idade));
	u->id = 1;

	return u;
}

void user_print(void* p){

	user u;
	u = (user) p;

	printf("nome=%s\n",u->nome);
	printf("idade=%d\n",u->idade);
	printf("id=%d\n",u->id);

}
