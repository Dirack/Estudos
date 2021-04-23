#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "pilha.h"
#include <locale.h>

int main(void){

	PILHA c;
	init(&c);
	char* p;
	char frase[50]="só último Este exercício é muito fácil";
	int teste=50081;

	setlocale(LC_ALL, "Portuguese");
	for(p=(char*) frase; *p != '\0'; p++){
		//printf("%c %d\n",*p,(int)(*p));
		push(&c,(int)(*p));
	}

	//print(c);
	//puts("");
	printf("=>%d %s",'á',teste);
}
