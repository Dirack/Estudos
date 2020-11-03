/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre enum, dias da semana.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 03/11/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include "_weekday.h"

int main(void){

	int i;
	weekday dia=sabado;

	printf("Sábado é dia de %s\n",isaDayOff(dia)?"folga":"trabalho");
	dia=segunda;
	printf("Segunda é dia de %s\n",isaDayOff(dia)?"folga":"trabalho");

}
