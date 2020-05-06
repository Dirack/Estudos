/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre macros condicionais e header guard.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 05/05/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#ifndef _EXEMPLO_H
	#define _EXEMPLO_H
	#include "exemplo.h"
#endif


#define DEBUG

int main(void)
{
	char* message="Exemplo funcionando!";
	show(message);

	#ifdef DEBUG
	printf("Rodando em modo de debug!\n");
	#endif
}
