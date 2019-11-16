/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre escrita em um arquivo com C.
* 
* Site: http://www.dirackslounge.online
* 
* Versão 1.0
* 
* Programador: Rodolfo Dirack 15/11/2019
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]){

	FILE* file;

	file = fopen("teste.txt", "w");

	fprintf(file,"Texto aleatório de teste para exemplificar como escrever em um arquivo");

	fclose(file);
}
