/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre leitura de arquivos em C com fseek
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

FILE* fp; 
int num_usuarios=2;

void ler_usuario(int id_usuario){

	char c[19];
	int i;

	if(id_usuario>=num_usuarios){
		printf("Usuário %d não encontrado!\n",id_usuario);
	}else{
		i=fseek(fp,id_usuario*19*sizeof(char),SEEK_SET);
		fread(&c,18*sizeof(char),1,fp);
		c[18]='\0';
		printf("=> %s\n",c);
	}

	rewind(fp);
}

int main(void){

	fp = fopen("users.csv","r");

	ler_usuario(3);
	ler_usuario(0);
	ler_usuario(1);

	fclose(fp);
	return 0;

}
