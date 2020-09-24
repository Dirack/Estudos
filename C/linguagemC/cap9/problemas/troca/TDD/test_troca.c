/*
* test_troca.c (C)
* 
* Objetivo: Estudo sobre passagem de parâmetros em c.
* Testa uma função de troca de valores, passados por
* valor x passados por referência. O teste da passagem
* por valor irá falhar, obviamente.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 24/09/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include "Unity/unity.h"
#include "../troca.h"

void setUp(void){};
void tearDown(void){};

void test_trocaPorReferencia(void){
	int a=1;
	int b=2;
	trocaPorReferencia(&a,&b);
	TEST_ASSERT_EQUAL(2,a);
	TEST_ASSERT_EQUAL(1,b);
}

void test_trocaPorValor(void){
	int a=1;
	int b=2;
	trocaPorValor(a,b);
	TEST_ASSERT_EQUAL(2,a);
	TEST_ASSERT_EQUAL(1,b);
}

int main(void){
	UNITY_BEGIN();
	RUN_TEST(test_trocaPorReferencia);
	RUN_TEST(test_trocaPorValor); /* Este teste irá falhar */
	return UNITY_END();
}
