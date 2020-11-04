/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre programação paralela com openmp.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 04/11/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#include <stdio.h>

#define N 100

int main() {
  int i, j; 
  
  for(i=0; i < N; i++)
    printf("i");

  for(j=0; j < N; j++)
    printf("j");
  
}
