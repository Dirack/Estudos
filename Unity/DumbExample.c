/*
* DumbExample.c (C)
* 
* Objetivo: Código fonte a ser testado com Unity.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 21/09/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include "DumbExample.h"

int8_t AverageThreeBytes(int8_t a, int8_t b, int8_t c)
{
return (int8_t)(((int16_t)a + (int16_t)b + (int16_t)c) / 3);
}
