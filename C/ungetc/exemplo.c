/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre a função unget.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 04/11/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>

int main(void){
	FILE* fp;
	int c;
	char buffer[256];

	fp = fopen("file.txt","r");
	if(fp==NULL){
		perror("Error in opening file");
		return(-1);
	}

	while(1){
		c = getc(fp);
		/* replace ! with + */
		if(c=='!'){
			ungetc('+',fp);
		}else{
			ungetc(c,fp);
		}
		fgets(buffer,255,fp);
		if(feof(fp)) break;
		fputs(buffer,stdout);
	}
	return(0);
}
