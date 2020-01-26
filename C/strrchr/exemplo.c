/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre a função strrchr do C.
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
#include <string.h>

static char* prog=NULL;

int main(int argc, char* argv[]){

	prog = strrchr(argv[0],'/');
	prog = (NULL==prog)? argv[0]:prog+1;

	puts(prog);

}
