/*
* main.c (C)
* 
* Objetivo: Exemplo de função para calcular os coeficientes
* de splines cúbicos naturais em C.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 27/04/2021
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <stdlib.h>
#include "splines_naturais.h"
#define N_POINTS 5

int main(void){

	int n=N_POINTS; // Número de pontos do spline
	float x[N_POINTS]={1,2,4,6,7}; // Coordenada x
	float y[N_POINTS]={2,4,1,3,3}; // Coordenada y
	float a[(N_POINTS-1)*4]; // Vetor de coeficientes
	int i; // Contador de laço

	/* Calcular e exibir os coeficientes dos splines */
	calcular_coeficientes(n,x,y,a);
	for(i=0;i<N_POINTS-1;i++){
		printf("a=%f b=%f c=%f d=%f\n",a[0+i*4],a[1+i*4],a[2+i*4],a[3+i*4]);
	}
}
