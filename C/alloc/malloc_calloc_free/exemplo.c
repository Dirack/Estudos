/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre as funções de alocação dinâmica do C.
*
* malloc alloca memória e atribui um ponteiro do tipo void ao bloco de
* memória allocado. Por isso necessita de casting.
*
* calloc alloca vetores e inicializa com zero cada posição.
*
* free libera a memória (desalloca), mas não apaga o conteúdo.
* 
* Site: http://www.dirackslounge.online
* 
* Versão 1.0
* 
* Programador: Rodolfo Dirack 16/11/2019
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdlib.h>
#include <stdio.h>

int main(int argc, char* argv[])
{
	int j;
	int* i = (int*) malloc(sizeof(int));
	int* ci = (int*) calloc(5,sizeof(int));

	*i = 4;

	printf("antes do free: %i\n",*i);

	free(i);
	
	printf("depois do free: %i\n",*i);

	for(j=0;j<5;j++){
		printf("vetor: %i\n",ci[j]);
	}
}
