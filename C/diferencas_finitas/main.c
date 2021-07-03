/*
* main.c (C)
* 
* Objetivo: Estudo sobre o método das diferenças finitas
* para calcular a derivada da função. Para demonstrar o método
* calcular a derivada da função seno(x) que é o cosseno(x).
*
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves 03/07/2021
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

float diff_fin( float h /* passo h */,
		float fxph /* f(x+h)*/,
		float fxmh /* f(x-h) */)
/*< Calcular a derivada da função utilizando o método das diferenças finitas >*/
{
	return (fxph-fxmh)/(2*h);
}

int main(void){

	float h=0.1; // Amostragem da função
	float x; // Coordenada x da amostra
	float ox=-3.14; // Origem do eixo x
	float fx=3.14; // final do eixo x
	int i; // Contador de laço
	int n; // Número de amostras

	n = (fx-ox)/h;

	/* Para validar o método basta calcular a derivada
	   da função seno de x. Pois, a derivada do seno de x
	   é o cosseno de x */
	for(i=0;i<n;i++){
		x=i*h+ox;
		printf("%f %f %f\n",x,sinf(x),diff_fin(h,sinf(x+h),sinf(x-h)));
	}
}
