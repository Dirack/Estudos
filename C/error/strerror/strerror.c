/*
* strerror.c (C)
* 
* Objetivo: Estudo sobre a função strerror em C. Esta função procura no array interno
* do sistema pelo número do erro e retorna um ponteiro para a mensagem de erro correspondente
* àquele número. EXIT_FAILURE e EXIT_SUCCESS são as macros padrão para informar o sucesso ou
* falha de um processo (definidas em stdlib.h).
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
#include <errno.h>

int main () {
   FILE *fp;

   fp = fopen("file.txt","r");
   if( fp == NULL ) {
      	printf("%s: Error: %s\n", __FILE__, strerror(errno));
	exit(EXIT_FAILURE);
   }
   
   exit(EXIT_SUCCESS);
}
