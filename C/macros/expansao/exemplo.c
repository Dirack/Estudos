/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre expansão de macros em C.
* 
* -Regras para a colocação de parênteses:
*	1. Em volta de cada parâmetro.
*	2. Em volta de cada expressão.
*	3. Em volta de toda macro.
*
* -Use '\' para múltiplas linhas.
*
* -Use '#' para expandir o parâmetro entre aspas.
* E '##' para concatenar strings.
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
#include <stdlib.h>

#define mult(x,y) ((x)*(y))

#define min(a,b) (((a)<(b))?\
	(a) : \
	(b))

#define show(x) printf("%s\n",#x)

#define conc(var) n##var

int main(void)
{
	int n1=1, n2=2, n3=3;

	printf("2*3=%d\n",mult(2,3));
	printf("minimo de 2 e 3 é %d\n",min(2,3));
	show("Rodolfo");
	printf("n1=%d n2=%d n3=%d\n",conc(1),conc(2),conc(3));
}
