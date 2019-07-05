/*
	 estudoPonteiros.c (c)
	 
	 Objetivo: Estudo sobre passagem de ponteiros para funções em C.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 04/07/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

#include <stdio.h>

void add(int x){
	x++;
}

void addPonteiro(int* px){
	++*px;
}

int main(void){

	int x=1;
	int* px;

	add(x);
	printf("add=%i\n", x);

	px = &x;
	addPonteiro(px);
	printf("addPonteiro=%i\n", x);

}

