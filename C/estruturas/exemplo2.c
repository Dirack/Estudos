/*
* exemplo2.c (C)
* 
* Objetivo: Estudo sobre passagem de estruturas para funções.
* 
* Site: http://www.dirackslounge.online
* 
* Versão 1.0
* 
* Programador: Rodolfo Dirack 02/12/2019
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <stdlib.h>

typedef struct {int dia,mes,ano;} data;

typedef struct
{
	char nome[100];
	int idade;
	float salario;
	data nasc;
} pessoa;

void ler(pessoa *ptr)
{
	printf("Nome: "); fgets((*ptr).nome,100,stdin);
	printf("idade: "); scanf("%d",&(*ptr).idade);
	printf("salario: "); scanf("%f",&(*ptr).salario);
	printf("data nasc.:"); 
	scanf("%d %d %d", &(*ptr).nasc.dia, &(*ptr).nasc.mes, &(*ptr).nasc.ano);
}

void mostrar(pessoa x){
	printf("Nome: %s\n", x.nome);
	printf("idade: %d\n", x.idade);
	printf("salario: %f\n", x.salario);
	printf("Data nasc.: %d/%d/%d\n",x.nasc.dia,x.nasc.mes,x.nasc.ano);
}

int main(int argc, char* argv[])
{
	pessoa p = {"Roxano",23,5054.32,{7,2,1967}};

	mostrar(p);
	puts("\n");
	ler(&p);
	puts("\n");
	mostrar(p);
}
