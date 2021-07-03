/*
* splines_naturais.c (C)
* 
* Objetivo: Função para calcular os coeficientes
* de splines cúbicos naturais em C.
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

void calcular_coeficientes(	int n, /* Dimensão dos vetores de pontos (x,y) */
				float* x, /* Coordenadas x */
				float* y, /* Coordenadas y */
				float* coef /* Coeficientes dos splines */)
/*< Função para calcular os coeficientes do spline cúbico natural

Nota: Recebe n pontos e dois vetores de coordenadas x e y de dimensão n.
Retorna um vetor de coeficientes a com 4 coeficientes para cada um dos 
n-1 splines cúbicos naturais, coef[(n-1)*4], interpolando cada par de
pontos (x,y).

O número de pontos deve ser igual ou superior a 3 (n>3) e o vetor x
deve estar em ordem crescente.
>*/
{

	float s2[n]; // Matriz de segundas derivadas
	int i, ip1, ip2, im1, m; // contador de laço
	float hb, ha, deltaa, deltab, t; // variáveis temporárias
	float e[n-2]; // Vetor de hi's
	float dp[n-2]; // Diagonal principal

	/* Os vetores devem possuir mais de 3 pontos */
	if(n<3){
		fprintf(stderr,"Erro, n<3\n");
		exit(-1);
	}

	/* O vetor x deve estar em ordem crescente */
	for(i=1;i<n;i++){
		if(x[i-1]>x[i]){
			fprintf(stderr,"Erro, vetor x deve possuir ordem crescente\n");
			exit(-2);
		}
	}
	
	/* Construção do sistema linear tridiagonal simétrico */
	ha = x[1]-x[0]; deltaa = (y[1]-y[0])/ha; m=n-2;
	for(i=0;i<m;i++){
		ip1 = i+1; ip2 = i+2;
		hb = x[ip2]-x[ip1];
		deltab = (y[ip2]-y[ip1])/hb;
		e[i] = hb; dp[i] = 2*(ha+hb);
		s2[ip1] = 6*(deltab-deltaa);
		ha=hb; deltaa=deltab;
	}

	/* Eliminação de Gauss */
	for(i=1;i<m;i++){
		ip1=i+1; im1=i-1;
		t = e[im1]/dp[im1];
		dp[i] = dp[i]-t*e[im1];
		s2[ip1] = s2[ip1]-t*s2[i];
	}

	/* Solução por substituições retroativas */
	s2[m]=s2[m]/dp[m-1];
	for(i=m-1;i>0;i--){
		ip1=i+1; im1=i-1;
		s2[i]=(s2[i]-e[im1]*s2[ip1])/dp[im1];
	}
	s2[0]=0; s2[n-1]=0;

	/* Calcular os coeficientes dos splines */
	for(i=0;i<n-1;i++){
		ha = x[i+1]-x[i];
		coef[0+i*4] = (s2[i+1]-s2[i])/(6*ha);
		coef[1+i*4] = s2[i]/2;
		coef[2+i*4] = (y[i+1]-y[i])/ha-(s2[i+1]+2*s2[i])*(ha/6);
		coef[3+i*4] = y[i];
	}
}
