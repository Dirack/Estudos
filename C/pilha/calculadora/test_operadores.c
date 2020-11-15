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

void test_retorna_int_para_cada_operador(){
/*< Para cada operador retorna um inteiro correspondente >*/

	TEST_ASSERT_EQUAL(1,retornaIntParaCadaOperador('+'));
	TEST_ASSERT_EQUAL(2,retornaIntParaCadaOperador('-'));
	TEST_ASSERT_EQUAL(3,retornaIntParaCadaOperador('*'));
	TEST_ASSERT_EQUAL(4,retornaIntParaCadaOperador('/'));
}

void test_retorna_zero_operador_errado(){
/*< Passa um valor errado à função e recebe 0 >*/

	TEST_ASSERT_EQUAL(0,retornaIntParaCadaOperador('r'));
	TEST_ASSERT_EQUAL(0,retornaIntParaCadaOperador('d'));
	TEST_ASSERT_EQUAL(0,retornaIntParaCadaOperador('c'));
	TEST_ASSERT_EQUAL(0,retornaIntParaCadaOperador('2'));
}

void test_faz_push_valores_pilha_operadores(){
	
	push(&po,retornaIntParaCadaOperador('+'));
	TEST_ASSERT_EQUAL(1,top(po));
	push(&po,retornaIntParaCadaOperador('-'));
	TEST_ASSERT_EQUAL(2,top(po));
	push(&po,retornaIntParaCadaOperador('*'));
	TEST_ASSERT_EQUAL(3,top(po));
	push(&po,retornaIntParaCadaOperador('/'));
	TEST_ASSERT_EQUAL(4,top(po));
	push(&po,retornaIntParaCadaOperador('r'));
	TEST_ASSERT_EQUAL(0,top(po));
}

void test_inicia_pilhas_para_calcular_1_vezes_2(){

	push(&p1,1);
	TEST_ASSERT_EQUAL(1,top(p1));
	push(&p2,2);
	TEST_ASSERT_EQUAL(2,top(p2));
	push(&po,retornaIntParaCadaOperador('*'));
	TEST_ASSERT_EQUAL(3,top(po));
	TEST_ASSERT_EQUAL(2,calculadora(top(p1),top(p2),top(po)));
	push(&re,2);
	TEST_ASSERT_EQUAL(2,top(re));

}

int main(void)
{
	UNITY_BEGIN();
	RUN_TEST(test_retorna_int_para_cada_operador);
	RUN_TEST(test_retorna_zero_operador_errado);
	RUN_TEST(test_faz_push_valores_pilha_operadores);
	RUN_TEST(test_inicia_pilhas_para_calcular_1_vezes_2);
	return UNITY_END();
}
