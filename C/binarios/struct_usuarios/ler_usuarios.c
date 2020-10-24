/*
* ler_usuarios.c (C)
* 
* Objetivo: Estudo sobre leitura de struct de arquivo binário.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 23/10/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <stdlib.h>
#include "usuarios.h"

int main(void){

	FILE* fp;
	int i, num_usuarios;
	USUARIO usuario;
	long tamanho;
	
	fp=fopen("usuarios.bin","rb");

	if(fp==NULL){
		fprintf(stderr,"Erro ao ler binário usuarios.bin, arquivo NÃO encontrado!");
		exit(1);
	}

	fseek(fp,0,SEEK_END);
	tamanho = ftell(fp);
	num_usuarios = tamanho/sizeof(usuario);
	rewind(fp);

	printf("Qual usuário ler? (forneça o id de usuário) ");
	scanf("%d",&i);

	if(i>=num_usuarios){
		printf("Usuário não encontrado! O arquivo contém apenas %d usuários!\n",num_usuarios);
	}else{
		fseek(fp,i*sizeof(usuario),SEEK_SET);
		fread(&usuario,sizeof(usuario),1,fp);
		printf("%s\n%d\n%f\n",
			usuario.nome,
			usuario.idade,
			usuario.saldo);
	}

	fclose(fp);
}
