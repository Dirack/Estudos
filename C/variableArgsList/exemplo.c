/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre como criar uma função
* que aceita uma lista variável de argumentos.
*
* Exemplo baseado no seguinte tutorial:
* https://www.cprogramming.com/tutorial/c/lesson17.html
*
* Site: http://www.dirackslounge.online
* 
* Versão 1.0
* 
* Programador: Rodolfo Dirack 26/01/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#include<stdarg.h>
#include<stdio.h>

/* Para permitir que uma função tenha uma lista variável de 
argumentos, é necessário colocar uma 'ellipsis' no lugar do último argumento.
(Algo como '...'). A expressão int a_function ( int x, ... ); serve para 
informar o compilador que a função aceita uma lista variável de argumentos, com
ao menos um argumento em primeiro lugar, o 'x'.
 */
int sum(int, ...);

int main(void) {
   printf("Sum of 10, 20 and 30 = %d\n",  sum(3, 10, 20, 30) );
   printf("Sum of 4, 20, 25 and 30 = %d\n",  sum(4, 4, 20, 25, 30) );

   return 0;
}

int sum(int num_args, ...) {
   
	int val = 0;
	/* Armazena o tamanho da lista de argumentos variável */
   	va_list ap;
	int i;

   	/*va_start é uma macro que aceita dois argumentos, uma va_list e o nome da variável que 
	  precede a ellipsis ("..."). Inicializa a lista de argumentos */
	va_start(ap, num_args);

	/* va_arg recebe va_list e o tipo do próximo argumento da lista. 
	   Esta função itera a lista para o próximo argumento e retorna este argumento. 
	   Este é o motivo porque a função printf precisa de uma string de formato.*/
   	for(i = 0; i < num_args; i++) {
      		val += va_arg(ap, int);
   	}

   	va_end(ap); /* Limpa a lista de argumentos */
 
   	return val;
}
