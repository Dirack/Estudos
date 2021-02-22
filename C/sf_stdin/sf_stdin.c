#include <stdbool.h>
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>

bool sf_stdin(void)
/*< returns true if there is an input in stdin >*/
{
	int c;

	if(isatty(fileno(stdin))) return false;

	c = fgetc(stdin);
	if(EOF==c) return false;
	ungetc(c,stdin);
	return true;
}

int main(int argc, char* argv[]){

	printf("%d\n",sf_stdin());
}
