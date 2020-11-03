/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre a biblioteca bool.h e enum.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 03/11/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include "_bool.h"

int main(void){

	bool test1=true;
	bool test2=false;

	if(test1)
		printf("olá true (%d)!\n",test1);

	if(!test2)
		printf("olá false (%d)!\n",test2);

}
