#include "Unity/unity.h"
#include "matriz.h"

MatrizSimetrica* mp;

void setUp(){};

void tearDown(){};

void test_criar_matriz_simetrica_e_acessar_elementos_atribuidos(){
	mp = cria(2);
	atribui(mp,0,0,1.0);
	atribui(mp,1,0,2.0);
	atribui(mp,0,1,3.0);
	atribui(mp,1,1,4.0);
	TEST_ASSERT_FLOAT_WITHIN(0.01,1.0,acessa(mp,1,1));
	TEST_ASSERT_FLOAT_WITHIN(0.01,2.0,acessa(mp,1,0));
	TEST_ASSERT_FLOAT_WITHIN(0.01,3.0,acessa(mp,0,1));
	TEST_ASSERT_FLOAT_WITHIN(0.01,4.0,acessa(mp,1,1));
	free(mp);
}

void test_numero_linhas_igual_numero_colunas_matriz_quadrada(){
	TEST_IGNORE_MESSAGE("TODO");
}

void test_a12_igual_a21_matriz_2_por_2(){
	TEST_IGNORE_MESSAGE("TODO");
}

int main(void){
	UNITY_BEGIN();
	RUN_TEST(test_criar_matriz_simetrica_e_acessar_elementos_atribuidos);
	RUN_TEST(test_numero_linhas_igual_numero_colunas_matriz_quadrada);
	RUN_TEST(test_a12_igual_a21_matriz_2_por_2);
	return UNITY_END();
}
