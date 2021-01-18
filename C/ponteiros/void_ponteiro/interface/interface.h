#include <stdio.h>

void print_menu(int* e){

	printf("Escolha oque quer cadastrar\n");
	printf("1-usuario\n2-funcionario\n");
	scanf("%d",e);
}

void print_pessoa(void* pessoa, void (*print)(void*)){

	printf("*** Sistema de cadastro ***\n");
	(*print)(pessoa);
	printf("******\n");
}
