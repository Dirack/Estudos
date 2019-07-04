/*
	 estudoPonteiros.c (c)
	 
	 Objetivo:
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 04/07/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

#include <stdio.h>

int main(void){

	int x;
	x=10;

	int *ponteiro;
	ponteiro=&x;

	printf("Valor dentro do ponteiro: %i\n",*ponteiro);
	printf("Endereço de memória: %p\n",ponteiro);

}
