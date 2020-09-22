/*
* test_questao2.c (C)
* 
* Objetivo: Testes das funções da questão 2.
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
#include "../functions_questao2.h"
#define PROMPT "Digite um número 2: "

void setUp(){};
void tearDown(){};

void test_lerInteiro(void){
	int i;
	i = lerInteiro(PROMPT);
	TEST_ASSERT_EQUAL(2,i);
}

int main(void){
	UNITY_BEGIN();
	RUN_TEST(test_lerInteiro);
	return UNITY_END();
}
