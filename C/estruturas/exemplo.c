/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre estruturas em linguagem C.
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

typedef struct {int dia,mes,ano;} DATA;

typedef struct pessoa
{
	char nome[100];
	int idade;
	float salario;
	DATA nasc;
} PESSOA;

void mostrar(PESSOA x)
{
	printf("nome: %s\n",x.nome);
	printf("idade: %d\n",x.idade);
	printf("salario: %.2f\n",x.salario);
	printf("Data nasc.: %d/%d/%d\n",x.nasc.dia,x.nasc.mes,x.nasc.ano);
}

int main(int argc, char* argv[])
{
	PESSOA p = {"Rodolfo",24,1091.12,{8,3,1992}};

	mostrar(p);

	return 0;
}

