/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre estouro da pilha em C.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 13/03/2021
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#include <stdio.h>

void f3(char hello[]){
	printf("%x\n",&hello);
	f3(hello);
}

int main(void){
	char hello[]="hello world";
	printf("%x\n",&hello);
	f3(hello);
}
