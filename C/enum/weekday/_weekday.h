/*
* _weekday.h (C)
* 
* Objetivo: Define o tipo weekday.
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

typedef enum {false,true} bool;

typedef enum {domingo,segunda,terca,quarta,quinta,sexta,sabado} WEEKDAY;

typedef WEEKDAY weekday;

int isaDayOff(weekday d){

	if(d==domingo || d==sabado)
		return true;

	return false;
}
