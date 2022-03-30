/*
* main.c (C)
* 
* Objetivo: Exemplo de função para calcular os coeficientes
* de splines cúbicos naturais em C e retornar a função interpolada.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 03/07/2021
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
	int i, j; // Contador de laço
	float xx, xs, yx; // Função interpolada
	float ox; // Origem do spline no eixo x
	float dx; // Amostragem da função interpolada
	int nx=2; // Número de amostras da função interpolada

	/* Calcular e exibir os coeficientes dos splines */
	calcular_coeficientes(n,x,y,a);

	for(i=0;i<N_POINTS-1;i++){
		ox = x[i];
		dx = (x[i+1]-x[i])/nx;
		for(j=0;j<nx;j++){
			xx = j*dx+ox;
			xs = xx-x[i];
			yx = a[i*4]*xs*xs*xs+a[i*4+1]*xs*xs+a[i*4+2]*xs+a[i*4+3];
			printf("%f %f\n",xx,yx);
		}
	}
}
