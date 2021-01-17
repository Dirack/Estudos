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

void interface(void* pessoa, void (*print)(void*)){

	printf("*** Sistema de cadastro ***\n");
	(*print)(pessoa);
	printf("******\n");
}

int main(void){

	user u;
	funcionario f;

	u = user_init();
	interface(u,user_print);

	f = funcionario_init();
	interface(f,funcionario_print);
}
