#include <stdio.h>

int quadrado(int i){
	return i^2;
}

int main(void){
	int i, n;
	printf("Entre com um número inteiro\n");
	scanf("%d",&n);
	for(i=0;i<=n;i++)
		printf("%d ao quadrado é %d\n",i,quadrado(i));
	return 0;
}
