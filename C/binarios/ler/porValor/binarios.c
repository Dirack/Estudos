/*
* binarios.c (C)
* 
* Objetivo: Estudo sobre leitura de arquivos binários em C.
* Necessita de um arquivo binário com 10 números inteiros.
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
	int i=0, valor, n;

	/* Abrir o arquivo binário */
	if((fp = fopen("numeros.bin","rb")) == NULL){
		printf("Impossível abrir o arquivo %s\n","numeros.bin");
		exit(1);
	}

	while(fread(&valor,sizeof(int),1,fp))
		printf("%2d° N°: %d\n",++i,valor);

	fclose(fp);
}
