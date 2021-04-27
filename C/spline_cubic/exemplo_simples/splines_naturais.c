/*
* splines_naturais.c (C)
* 
* Objetivo: Estudo sobre splines cúbicos naturais em C.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 26/04/2021
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <stdlib.h>

#define N_POINTS 5

int main(void){

	int n=N_POINTS; // Número de pontos do spline
	float x[N_POINTS]={1,2,4,6,7}; // Coordenada x
	float y[N_POINTS]={2,4,1,3,3}; // Coordenada y
	float s2[N_POINTS]; // Matriz de segundas derivadas
	int i, ip1, ip2, im1, m; // contador de laço
	float hb, ha, deltaa, deltab, t; // variáveis temporárias
	float e[N_POINTS-2]; // Vetor de hi's
	float dp[N_POINTS-2]; // Diagonal principal
	float a, b, c, d; // Coeficientes

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

	/* Exibir as segundas derivadas */
	for(i=0;i<N_POINTS;i++)
		printf("s2[%d]=%f\n",i,s2[i]);

	/* Calcular e exibir os coeficientes dos splines */
	for(i=0;i<N_POINTS-1;i++){
		ha = x[i+1]-x[i];
		a = (s2[i+1]-s2[i])/(6*ha);
		b = s2[i]/2;
		c = (y[i+1]-y[i])/ha-(s2[i+1]+2*s2[i])*(ha/6);
		d = y[i];
		printf("a=%f b=%f c=%f d=%f\n",a,b,c,d);
	}
}
