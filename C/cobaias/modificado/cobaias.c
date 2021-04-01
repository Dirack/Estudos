#include <stdio.h>
#include <stdlib.h>

int main(){
	int i, x, c, r, s, qtd, soma;
	char cobaia;
	double percCoelho, percRatos, percSapos;

	c= 0;
	r = 0;
	s = 0;
	soma = 0;

	printf("Quantos casos de teste serao digitados? ");
	scanf("%d", &x);
	
	for(i=0; i<x; i++){
		 printf("Quantidade de cobaias: ");
		 scanf("%d", &qtd);
		 soma = soma + qtd;
		 printf("Tipo de cobaia:");
		 scanf(" %s", &cobaia);

		 switch (cobaia){
			case 'C':
			case 'c': c = c+ qtd; break;
			case 'R':
			case 'r': r = r + qtd; break;
			case 'S':
			case 's':  s = s + qtd; break;
			default: printf("Cobaia %c não encontrada\n",cobaia); return 1;
		 }
	} 

	printf("Relatorio Final : \n"); 
	printf("Total de Cobaias = %d\n", soma);
	printf("Total de coelhos : %d \n", c);
	printf("Total de ratos : %d \n", r);
	printf("Total de sapos : %d \n", s);
	percCoelho = (c/soma)* 100;
	percRatos = (r/soma)* 100;
	percSapos = (s/soma)*100;
	printf("Percentual de coelhos : %.2lf %% \n", percCoelho);
	printf("Percentual de ratos : %.2lf  %% \n", percRatos);
	printf("Percentual de sapos : %.2lf %% \n", percSapos);
	
	return 0;
}
