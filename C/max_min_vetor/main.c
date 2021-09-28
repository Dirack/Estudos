#include  <stdio.h>
#include <stdlib.h>
#include "vetor.h"

int main(){

	int n, i, *vet, minimo, maximo; 

	printf("Quantas unidades você que digitar ?");
	scanf("%d", &n);
	vet = malloc(n * sizeof(int));

	for (i = 0; i < n; i++){
		printf("Digite a unidade de índice %d: ", i);
		scanf("%d", &vet [i]);
	}

	mm(vet, n, &minimo, &maximo); 
	printf("Mínimo; %d, Máximo: %d\n", minimo, maximo); 

	return 0; 
}
