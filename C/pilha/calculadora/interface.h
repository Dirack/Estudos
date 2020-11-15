#include <string.h>	
#include "pilha.h"
#include "operadores.h"

void interfaceCalculadora(PILHA* p1, PILHA* p2, PILHA* po){

	int i=0,num;
	int n1;
	int n2;
	char operador;

	printf("Número de operacoes: ");
	scanf("%d",&num);

	while(i<num){
		scanf("%d %c %d",&n1,&operador,&n2);
		push(p1,n1);
		//free(buffer);
		//scanf("%c",&operador);
		push(po,retornaIntParaCadaOperador(operador));
		//free(operador);
		//scanf("%d",&n2);
		push(p2,n2);
		//free(buffer);
		i++;
	}
	//TEST_MESSAGE(buffer);
	//push(p1,atoi(buffer));
	//push(p2,2);
	//push(po,1);
}
