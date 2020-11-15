/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre a função fflush em C.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 15/11/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>

int main(void){

	int i;
	char palavras[25];

	for(i=0;i<3;i++){
		printf("Entre com mais de uma palavra (quaisquer): ");
		scanf("%s",palavras);
		printf("A primeira palavra que vc entrou foi %s\n",palavras);
		fflush(stdin);
	}
}
