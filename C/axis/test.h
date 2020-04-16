/*
* test.c (C)
* 
* Objetivo: Configuração dos testes automatizados para correção dos exercícios.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 15/04/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#include <stdio.h>
#include "../minunit.h"

static int n_antes;
static int n_depois;
static float o_antes;
static float o_depois;
static float d_antes;
static float d_depois;
static char* label_antes;
static char* label_depois;
static char* unit_antes;
static char* unit_depois;

void test_setup(void){
}

void test_teardown(void){
	/* Nothing */
}

MU_TEST(test_check){
	mu_check(n_antes == 10);
	mu_check(n_depois == 20);
	mu_check(o_antes == 0.);
	mu_check(o_depois == 1.);
	mu_check(d_antes == 0.5);
	mu_check((d_depois-0.1) <= 0.001);
}

MU_TEST(test_string_eq){
	mu_assert_string_eq("Distância",label_antes);
	mu_assert_string_eq("Profundidade",label_depois);
	mu_assert_string_eq("Km",unit_antes);
	mu_assert_string_eq("m",unit_depois);
}

MU_TEST_SUITE(test_suite){
	MU_SUITE_CONFIGURE(&test_setup, &test_teardown);
	MU_RUN_TEST(test_check);
	MU_RUN_TEST(test_string_eq);
}
