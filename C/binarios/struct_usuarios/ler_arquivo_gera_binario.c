/*
* ler_arquivo_gera_binario.c (C)
* 
* Objetivo: Gerar binário lendo informações de arquivo.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 24/10/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <stdlib.h>
#include "usuarios.h"

int main(void){

	FILE* fp=fopen("usuarios.txt","r");
	USUARIO tmp;
	USUARIO* usuarios;
	char ch;
	int num_linhas=0;
	int i=0;

	while((ch=fgetc(fp))!=EOF){
		if(ch=='\n')
			num_linhas++;
	}

	usuarios = (USUARIO*) malloc(num_linhas*sizeof(USUARIO));
	rewind(fp);

	while(fscanf(fp,"%s %d %f",tmp.nome,&tmp.idade,&tmp.saldo)!=EOF){
		printf("Nome: %s Idade: %d Saldo: %f\n",
			tmp.nome,
			tmp.idade,
			tmp.saldo);

		usuarios[i] = tmp;
		i++;
	}

	fclose(fp);

	fp = fopen("usuarios.bin","wb");
	fwrite(usuarios,sizeof(USUARIO),num_linhas,fp);
	fclose(fp);
}
