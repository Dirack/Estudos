/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre void ponteiro como argumento de função.
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


#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "user.h"
#include "funcionario.h"
#include "interface.h"

int main(void){

	user u;
	funcionario f;
	int i;

	print_menu(&i);
	if(i==1){
		u = user_init();
		print_pessoa(u,user_print);
	}else if(i==2){
		f = funcionario_init();
		print_pessoa(f,funcionario_print);
	}else{
		fprintf(stderr,"Escolha %d desconhecida\n",i);
		exit(1);
	}
}
