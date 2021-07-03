/*
* splines_naturais.h (C)
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

void calcular_coeficientes(	int n, /* Dimensão dos vetores de pontos (x,y) */
				float* x, /* Coordenadas x */
				float* y, /* Coordenadas y */
				float* coef /* Coeficientes dos splines */);
/*< Função para calcular os coeficientes do spline cúbico natural

Nota: Recebe n pontos e dois vetores de coordenadas x e y de dimensão n.
Retorna um vetor de coeficientes a com 4 coeficientes para cada um dos 
n-1 splines cúbicos naturais, coef[(n-1)*4], interpolando cada par de
pontos (x,y).

O número de pontos deve ser igual ou superior a 3 (n>3) e o vetor x
deve estar em ordem crescente.
>*/
