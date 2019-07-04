/*
	 estudoPonteiros.c (c)
	 
	 Objetivo: Continuação da Introdução do estudo sobre ponteiros em C.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 04/07/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

#include <stdio.h>

int main(void){
	
	int x = 10;
	double y =20.5;
	char z = 'a';

	int *px = &x;
	double *py = &y;
	char* pz = &z;

	printf("Valor x: %i Endereço x: %p\n", x, px);
	printf("Valor y: %f Endereço y: %p\n", y, py);
	printf("Valor z: %c Endereço z: %p\n", z, pz);

}
