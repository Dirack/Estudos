/*
* binarios.c (C)
* 
* Objetivo: Estudo sobre escrita de arquivos binários em C.
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
#include <stdlib.h> /* Por causa da função exit */

int main(int argc, char* argv[])
{
	FILE* fp;
	int i, v[10];

	/* Ler os dados a partir do teclado */
	for(i=0; i<10; i++){
		printf("Introduza o %d-ésimo numéro: ",i+1);
		scanf("%d",&v[i]);
	}

	/* Abrir o arquivo DADOS.dat */
	if((fp = fopen("DADOS.dat","wb"))==NULL){
		printf("Falha ao criar o arquivo! %s\n","DADOS.dat");
		exit(1);
	}

	if(fwrite(v,sizeof(int),10,fp)!=10)
		fprintf(stderr,"Não foram inscritos todos os elementos!\n");

	fclose(fp);
}
