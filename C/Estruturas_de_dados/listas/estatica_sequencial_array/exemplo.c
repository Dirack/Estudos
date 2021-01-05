#include "listasequencial.h"

int main(void){

	LISTA* li;
	int x;

	li = cria_lista();
	
	x = tamanho_lista(li);

	libera_lista(li);
}
