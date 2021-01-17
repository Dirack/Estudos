/*
* exemplo2.c (C)
* 
* Objetivo: Exemplo de uso  de ponteiros de funções,
* testado com o programa expect a partir de 'script.exp'.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 17/01/2021
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#include <stdio.h>

int quadrado(int x){return x*x;}

int print_especial(int(*f)(int n), int n){

	printf("<<[%d]>>\n",(*f)(n));
}

int main(void){
	
	int i;
	
	printf("Introduza um número inteiro: ");
	scanf("%d",&i);
	print_especial(quadrado,i);
}
