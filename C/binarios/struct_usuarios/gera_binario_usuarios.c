/*
* gera_binario_usuarios.c (C)
* 
* Objetivo: Gerar arquivo binário com os usuários cadastrados.
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

#include "usuarios.h"
#include <stdio.h>
#include <stdlib.h>

int main(void){

	int num_usuarios;
	int i;

	printf("Quantos usuários quer cadastrar? \n");
	scanf("%d",&num_usuarios);

	USUARIO* usuario = (USUARIO*) malloc(num_usuarios*sizeof(USUARIO));
	USUARIO tmp_usuario;

	for(i=0;i<num_usuarios;i++){

		printf("Nome: ");
		scanf("%s",tmp_usuario.nome);
		printf("Idade: ");
		scanf("%d",&(tmp_usuario.idade));
		printf("saldo: ");
		scanf("%f",&(tmp_usuario.saldo));

		usuario[i] = tmp_usuario;
	}

	FILE* fp=fopen("usuarios.bin","wb");

	fwrite(usuario,sizeof(USUARIO),num_usuarios,fp);
	fclose(fp);
}

