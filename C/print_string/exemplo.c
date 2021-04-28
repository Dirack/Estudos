#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void print_string(char* str)
{
	char* c;

	if ( '\0' == *str ) {
		printf("Valor nulo ...\n");
		return;
	}

	for ( c = str; *c != '\0' ; c++ ) {
		printf("%c", *c );
	}
}

int main(int argc, char *argv[]) {
	char vet[120];
	scanf("%[^\n]", vet);
	print_string(vet);
}
