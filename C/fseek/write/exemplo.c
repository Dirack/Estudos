/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre sistema completo de cadastro de usuarios em arquivo csv.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 06/05/2021
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <stdlib.h>

FILE* fp;
int num_usuarios;

void ler_usuario(int id_usuario){

	char c[19];
	int i;
	if(id_usuario>=num_usuarios){
		printf("Usuário %d não encontrado!\n", id_usuario);
	}else{
		i = fseek(fp,id_usuario*19*sizeof(char),SEEK_SET);
		fread(&c,18*sizeof(char),1,fp);
		c[18]='\0';
		printf("=> %s\n",c);
	}
	rewind(fp);
}

void adicionar_usuario(){

	char nome[10];
	int idade;
	int salario;
	printf("Digite o nome do usuário: ");
	scanf(" %[^\n]",nome);
	nome[9]='\0';
	printf("Digite a idade do usuário: ");
	scanf(" %d",&idade);
	printf("Digite o salário do usuário: ");
	scanf(" %d",&salario);

	(void) fseek(fp,0,SEEK_END);
	fprintf(fp,"%9s %3d %4d\n",nome,idade,salario);
}

int conta_linhas(){
	char linha[30];
	int count=0;
	while(fscanf(fp,"%[^\n]%*c",linha)==1){
		count++;
	}
	rewind(fp);
	return count;
}

int main(void){
	/* Abrir arquivo csv */
	fp = fopen("users.csv","r+");

	/* Contar o número de linhas do arquivo = número de usuários */
	num_usuarios = conta_linhas();

	/* Ler alguns usuários */
	ler_usuario(2);
	ler_usuario(0);
	ler_usuario(1);
	ler_usuario(3);

	/* Função para adicionar novo usuário */
	adicionar_usuario();
	return 0;
}
