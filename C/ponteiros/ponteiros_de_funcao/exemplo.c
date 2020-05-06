/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre ponteiros de funções em C.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 06/05/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <assert.h>
#include <stdio.h>

int quadrado(int x){return x*x;}
int dobro(int x){return 2*x;}
int cubo(int x){return quadrado(x)*x;}

void print_especial(int(*funcao)(int), int n)
{
	assert(funcao!=NULL);
	printf("<<<|%d|>>>\n",(*funcao)(n));
}

int main(void)
{
	print_especial(quadrado,3);
	print_especial(dobro,10);
	print_especial(cubo,5);
}
