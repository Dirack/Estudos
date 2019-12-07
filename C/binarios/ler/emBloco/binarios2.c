/*
* binarios2.c (C)
* 
* Objetivo: Estudo sobre leitura em bloco de arquivos binários em C.
* 
* Site: http://www.dirackslounge.online
* 
* Versão 1.0
* 
* Programador: Rodolfo Dirack 07/12/2019
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[])
{
	FILE* fp;
	int i=0, v[10], n;

	/* Abrir o arquivo binário */
	if((fp = fopen("numeros.bin","rb")) == NULL){
		printf("Impossível abrir o arquivo %s\n","numeros.bin");
		exit(1);
	}

	n = fread(v,sizeof(int),10,fp);

	if(n!=10)
		fprintf(stderr,"Foram lidos apenas %d elementos!!!\n",n);

	for(i=0; i<n; i++)
		printf("%2d° N°: %d\n",i+1,v[i]);

	fclose(fp);
}
