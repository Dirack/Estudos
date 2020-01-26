/*
* sf_error.c (C)
* 
* Objetivo: Estudo sobre o funcionamento da função sf_error do pacote Madagascar.
* 
* Site: http://www.dirackslounge.online
* 
* Versão 1.0
* 
* Programador: Rodolfo Dirack 26/01/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#include <stdio.h>
#include <stdlib.h>
#include <stdarg.h>

void sf_error(char* format, ...)
{
	va_list args;

	(void) fflush(stdout);
	va_start(args,format);

	(void) vfprintf(stderr,format,args);
	va_end(args);

	exit(EXIT_FAILURE);
}

int main(void){

	sf_error("%f, %d, %s\n",34.8,21,"Rodolfo");

}
