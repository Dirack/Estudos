/*
* test_questao1.c (C)
* 
* Objetivo: Suíte de testes da questão 1.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 22/09/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include "Unity/unity.h"
#include "../functions_questao1.h"
#include <stdbool.h>

void setUp(void){};
void tearDown(void){};

void test_iszero(void){
	int i=0,j=1;
	TEST_ASSERT_TRUE(iszero(i));
	TEST_ASSERT_FALSE(iszero(j));
}

void test_add1(void){
	int x=1;
	add1(&x);
	TEST_ASSERT_EQUAL(2,x);
}

void test_zero(void){
	int i=1;
	zero(&i);
	TEST_ASSERT_EQUAL(0,i);
}

int main(void){
	UNITY_BEGIN();
	RUN_TEST(test_iszero);
	RUN_TEST(test_add1);
	RUN_TEST(test_zero);
	return UNITY_END();
}
