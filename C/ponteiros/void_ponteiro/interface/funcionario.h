/*
* funcionario.h (C)
* 
* Objetivo: Definição do tipo 'funcionário' para o sistema de cadastro.
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

typedef struct FUNCIONARIO* funcionario;

typedef enum {porteiro,secretario,executivo} CARGOS_DISPONIVEIS;

typedef CARGOS_DISPONIVEIS cargos_disponiveis;

struct FUNCIONARIO{
	char nome[20];
	char cargo[10];
	float salario;
	long int cpf;
};

static float cargo2salario(char* cargo){

	float salario=1000.0;

	return salario;
}

funcionario funcionario_init(){

	funcionario f;
	char nome[20];
	char cargo[10];
	int i;

	f = (funcionario) malloc(sizeof(*f));

	setbuf(stdin,NULL);
	printf("Qual o seu nome? ");
	fgets(nome, 21*sizeof(char),stdin);
	for(i=0;i<sizeof(nome);i++){
		if(nome[i]=='\n'){
			strncpy(f->nome,nome,i);
			break;
		}
	}

	setbuf(stdin,NULL);
	printf("Qual o seu cargo? ");
	fgets(cargo, 11*sizeof(char),stdin);
	for(i=0;i<sizeof(cargo);i++){
		if(cargo[i]=='\n'){
			strncpy(f->cargo,cargo,i);
			break;
		}
	}

	f->salario = cargo2salario(cargo);

	printf("Qual o seu cpf? ");
	scanf("%ld",&(f->cpf));

	return f;
}

void funcionario_print(void* pf){

	funcionario f;
	f = (funcionario) pf;

	printf("nome=%s\n",f->nome);
	printf("cargo=%s\n",f->cargo);
	printf("salario=%.2f\n",f->salario);
	printf("cpf=%ld\n",f->cpf);

}
