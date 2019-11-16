/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre a função sizeof do c.
* 
* Site: http://www.dirackslounge.online
* 
* Versão 1.0
* 
* Programador: Rodolfo Dirack 15/11/2019
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>

struct x {
	int a;
	double b;
	int c;
};

int main(int argc, char* argv[])
{
	struct x estrutura;

	printf("Tamanho struct: %li bytes\n", sizeof(estrutura));
	printf("Tamanho int: %li bytes\n", sizeof(estrutura.a));

	printf("Tamanho double: %li bytes\n", sizeof(estrutura.b));
	return(0);
}
