#include "Unity/unity.h"
#include "pilha.h"
#include "operadores.h"
#include "calculadora.h"

PILHA po;
PILHA p1;
PILHA p2;
PILHA re;

void setUp(){
	if(po!=NULL)
		free(po);
	init(&po);
	if(p1!=NULL)
		free(p1);
	init(&p1);
	if(p2!=NULL)
		free(p2);
	init(&p2);
	if(re!=NULL)
		free(re);
	init(&re);
};

void tearDown(){
//	print(po);
};

void test_calcular_varios_valores_p1_vezes_p2(){

	TEST_ASSERT_EQUAL(2,calculadora(1,2,retornaIntParaCadaOperador('*')));
	TEST_ASSERT_EQUAL(4,calculadora(2,2,retornaIntParaCadaOperador('*')));
	TEST_ASSERT_EQUAL(15,calculadora(3,5,retornaIntParaCadaOperador('*')));
	TEST_ASSERT_EQUAL(27,calculadora(3,9,retornaIntParaCadaOperador('*')));
}


void test_calcular_varios_valores_p1_mais_p2(){
	TEST_ASSERT_EQUAL(3,calculadora(1,2,retornaIntParaCadaOperador('+')));
	TEST_ASSERT_EQUAL(4,calculadora(2,2,retornaIntParaCadaOperador('+')));
	TEST_ASSERT_EQUAL(8,calculadora(3,5,retornaIntParaCadaOperador('+')));
	TEST_ASSERT_EQUAL(12,calculadora(3,9,retornaIntParaCadaOperador('+')));
}

void test_calcular_varios_valores_p1_menos_p2(){

	TEST_ASSERT_EQUAL(-1,calculadora(1,2,retornaIntParaCadaOperador('-')));
	TEST_ASSERT_EQUAL(0,calculadora(2,2,retornaIntParaCadaOperador('-')));
	TEST_ASSERT_EQUAL(2,calculadora(5,3,retornaIntParaCadaOperador('-')));
	TEST_ASSERT_EQUAL(6,calculadora(9,3,retornaIntParaCadaOperador('-')));
}

void test_calcular_varios_valores_p1_dividido_p2(){
	TEST_ASSERT_EQUAL(3,calculadora(6,2,retornaIntParaCadaOperador('/')));
	TEST_ASSERT_EQUAL(1,calculadora(2,2,retornaIntParaCadaOperador('/')));
	TEST_ASSERT_EQUAL(5,calculadora(15,3,retornaIntParaCadaOperador('/')));
	TEST_ASSERT_EQUAL(3,calculadora(9,3,retornaIntParaCadaOperador('/')));
}

void test_calcular_varios_valores_a_partir_das_pilhas(){

	push(&p1,1);
	push(&p2,2);
	push(&re,calculadora(top(p1),top(p2),retornaIntParaCadaOperador('*')));
	TEST_ASSERT_EQUAL(2,top(re));
}

void test_implementa_logica_calculadora_para_uma_operacao(){

	push(&p1,1);
	push(&p2,2);
	push(&po,retornaIntParaCadaOperador('*'));
	implementaLogicaCalculadora(&p1,&p2,&po,&re);
	TEST_ASSERT_EQUAL(2,top(re));
	TEST_ASSERT_TRUE(empty(p1));	
	TEST_ASSERT_TRUE(empty(p2));	
	TEST_ASSERT_TRUE(empty(po));	
}

void test_implementa_logica_calculadora_para_mais_de_uma_operacao(){

	push(&p1,-1);
	push(&po,retornaIntParaCadaOperador('-'));
	push(&p2,-1);

	push(&p1,2);
	push(&po,retornaIntParaCadaOperador('+'));
	push(&p2,2);

	push(&p1,-1);
	push(&po,retornaIntParaCadaOperador('/'));
	push(&p2,2);

	push(&p1,1);
	push(&po,retornaIntParaCadaOperador('*'));
	push(&p2,2);

	implementaLogicaCalculadora(&p1,&p2,&po,&re);
	TEST_ASSERT_EQUAL(3,top(re));
	TEST_ASSERT_TRUE(empty(p1));	
	TEST_ASSERT_TRUE(empty(p2));	
	TEST_ASSERT_TRUE(empty(po));	
}

int main(void)
{
	UNITY_BEGIN();
	RUN_TEST(test_calcular_varios_valores_p1_vezes_p2);
	RUN_TEST(test_calcular_varios_valores_p1_mais_p2);
	RUN_TEST(test_calcular_varios_valores_p1_menos_p2);
	RUN_TEST(test_calcular_varios_valores_p1_dividido_p2);
	RUN_TEST(test_calcular_varios_valores_a_partir_das_pilhas);
	RUN_TEST(test_implementa_logica_calculadora_para_uma_operacao);
	RUN_TEST(test_implementa_logica_calculadora_para_mais_de_uma_operacao);
	return UNITY_END();
}
