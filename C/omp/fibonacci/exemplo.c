/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre recursão fibonacci com openmp.
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

#define N 42

long fib(long n) {
  long i, j;

  if (n < 2) {
    return n;
  }
  else {
    i = fib(n-1);
    j = fib(n-2);

    return i + j;
  }
}

int main() {
  printf("\nFibonacci(%lu) = %lu\n",(long)N,fib((long)N));
}
