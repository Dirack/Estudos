/*
* main.c (C)
* 
* Objetivo: Estudo algoritmo eliminação de gauss em C
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves 27/06/2021
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include<stdio.h>
#include<stdlib.h>
#define MAXDIM 10

void eliminacao_gauss(float A[][MAXDIM], float* x, float* X, int n){

	int k, i, j;
	float c, soma, a;

	//Eliminação Gaussiana
	for(k=0; k<n-1; k++){
		for(i = k+1; i<n; i++){
			c = (-1)*(A[i][k]/A[k][k]);
			A[i][k] = 0;
			x[i] = x[i] + c*x[k];
			for (j = k+1; j<n; j++){
			     A[i][j] = A[i][j] + c*A[k][j];
			}
		}
	}


	X[n-1] = x[n-1]/A[n-1][n-1];

	//Substituição regressiva
	for(i = n-2; i>=0; i--){
	   soma = 0;
		for (j=i+1; j<n; j++){
			soma += A[i][j]*X[j];
		}
		X[i] =(x[i]-soma)/A[i][i];
	}
}


int main(){
	int i, j, k, n=4;
	float A[MAXDIM][MAXDIM]={{1,1,0,3},{2,1,-1,1},{3,-1,-1,2},{-1,2,3,-1}};
	float x[4]={4,1,-3,4}, X[4]={0,0,0,0};

	for(i=0; i<n; i++){
		printf("|");
		for(j=0; j<n; j++){
			printf("%6.2f\t", A[i][j]);
		}
		printf("| | X[%d] |   ",i);
		printf("| %6.2f |",x[i]);
		printf("\n");
	}

	printf("\n");

	eliminacao_gauss(A,x,X,n);

	for(i=0; i<n; i++){
		printf("|");
		for(j=0; j<n; j++){
			printf("%6.2f\t", A[i][j]);
		}
		printf("| | %6.2f |   ",X[i]);
		printf("| %6.2f |", x[i]);
		printf("\n");
	}

}
