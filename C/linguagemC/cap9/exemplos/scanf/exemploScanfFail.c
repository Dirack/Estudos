/*
* exemploScanfFail.c (C)
* 
* Objetivo: Exemplo de má utilização da função scanf.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 23/09/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>

int main(void){

	int n;
	puts("Introduza um N° inteiro: ");
	scanf("%d",&n)==0;

	printf("Valor inteiro: %d\n",n);
}
