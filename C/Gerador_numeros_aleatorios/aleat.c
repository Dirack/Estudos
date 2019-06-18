/*
	 aleat.c (c)
	 
	 Objetivo: Exemplo de gerador de número aleatório em linguagem C.
	 IMPORTANTE: srand() deve ficar na função main() para poder funcionar.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 18/06/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/


#include <stdio.h>
#include <ncurses.h>
#include <stdlib.h>// necessário p/ as funções rand() e srand()
#include<stdio.h>
#include<time.h>//necessário p/ função time()

float gerarNumeroAleatorioEntre0e1(){

	int i, u;
	float ur;
	
	u = rand()%100;
	ur=(float)u/1000;

	return ur;

}

int main(void)
{
	int i,u;
	float ur;
      
	printf("Gerando 10 valores aleatorios:\n\n");

	/* srand(time(NULL)) objetiva inicializar o gerador de números aleatórios
	com o valor da função time(NULL). Este por sua vez, é calculado
	como sendo o total de segundos passados desde 1 de janeiro de 1970
	até a data atual.
	Desta forma, a cada execução o valor da "semente" será diferente.
	*/
	srand(time(NULL));

	for (i=0; i < 10; i++){

		ur = gerarNumeroAleatorioEntre0e1();

		// gerando valores aleatórios na faixa de 0 a 100
		printf("%f ", ur); 
	}
	
	return 0;
}
