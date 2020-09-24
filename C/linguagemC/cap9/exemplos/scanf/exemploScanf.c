/*
* exemploScanf.c (C)
* 
* Objetivo: Exemplo de utilização da função scanf.
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

int main(){
	int n, ret;

	puts("Introduza um n inteiro: ");
	while(scanf("%d",&n)==0){
		fflush(stdin);
	}
	printf("Valor Inteiro: %d\n",n);
}
