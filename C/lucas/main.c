#include <stdio.h>
#include <stdlib.h>

float  pacienteinformacao (float *V, int procedimentos) {
	int i;
	float soma_procedimentos=0;

	for (i=0; i< procedimentos; i++) {
            soma_procedimentos=soma_procedimentos+V[i];
	}
	return soma_procedimentos/ procedimentos;
}

void main(){
        int i, n; 
        char **informacao;
	char buffer[20];

	printf ("Quantos pacientes vc quer informar? ");
	scanf ("%d", &n);

	informacao = (char**) malloc(n*sizeof(char*));

	if (informacao==NULL) {
		printf ("Não foi possível alocar a área desejada\n");
		exit (1);
	}

	for(i=0;i<n;i++)
		informacao[i]=(char*) malloc(20*sizeof(char));

	printf ("*** Digitação dos dados da informação ***\n");

	for (i=0; i<n; i++) {
		printf ("Digite a informação do paciente %d/%d:\n", i+1,n);
		printf("Nome: ");
		scanf (" %[^\n]%*c", informacao[i]);
	}

	puts("\n");
	for(i=0;i<n;i++){
		printf("Informação do paciente %d\n",i+1);
		printf("Nome: %s\n",informacao[i]);
	}
}
