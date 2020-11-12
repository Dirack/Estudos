/*
* exemplo.c (C)
* 
* Objetivo: Obter o padrão do compilador.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 11/11/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>

int main(void){
#ifndef __STDC_VERSION__
	printf("C89\n");
#else
	#if __STDC_VERSION__ == 199409L
	printf("C94\n");
	#elif __STDC_VERSION__ == 199901L
	printf("C99\n");
	#endif
#endif
	printf("%ld\n",__STDC_VERSION__);
}
