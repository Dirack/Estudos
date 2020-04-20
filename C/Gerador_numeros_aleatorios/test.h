/*
* test.c (C)
* 
* Objetivo: Configuração dos testes automatizados para correção dos exercícios.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 20/04/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#define NUMBERS 20

#include <stdio.h>
#include "../minunit.h"

static float c[NUMBERS];

void test_setup(void){
}

void test_teardown(void){
	/* Nothing */
}

MU_TEST(test_check){
	int i;
	for(i=0;i<NUMBERS;i++){
		mu_check( c[i] > 0.);
		mu_check(c[i] < 1.);
	}
}

MU_TEST_SUITE(test_suite){
	MU_SUITE_CONFIGURE(&test_setup, &test_teardown);

	MU_RUN_TEST(test_check);
}
