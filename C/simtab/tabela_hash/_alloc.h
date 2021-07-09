/*
* _alloc.h (C)
* 
* Objetivo: Allocador dinâmico personalizado.
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

#include <stdlib.h>

void* sf_alloc(size_t n, size_t size);

char* sf_charalloc(int n);

void *sf_realloc(void* ptr, size_t n, size_t size);
