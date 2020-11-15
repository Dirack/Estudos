#include "Unity/unity.h"
#include "interface.h"
#include "calculadora.h"

PILHA p1;
PILHA p2;
PILHA po;
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
};


void tearDown(){
};

void test_interface_calculadora_recebe_string_inicializa_pilhas_calculadora_2_mais_2(){

	TEST_IGNORE();
	TEST_MESSAGE("TESTE 2+2=4");
	interfaceCalculadora(&p1,&p2,&po);

	TEST_ASSERT_EQUAL(2,top(p1));
	TEST_ASSERT_EQUAL(2,top(p2));
	TEST_ASSERT_EQUAL(1,top(po));

}

void test_interface_calculadora_recebe_string_inicializa_pilhas_calculadora_e_implementa_calculadora(){

	TEST_IGNORE();
	TEST_MESSAGE("TESTE 2+2-1*2/2");
	interfaceCalculadora(&p1,&p2,&po);
	TEST_ASSERT_EQUAL(1,top(p1));
	TEST_ASSERT_EQUAL(2,top(p2));
	TEST_ASSERT_EQUAL(3,top(po));

	implementaLogicaCalculadora(&p1,&p2,&po,&re);
	TEST_ASSERT_EQUAL(3,top(re));	
}

void test_interface_calculadora_recebe_string_inicializa_pilhas_calculadora_e_implementa_calculadora_2(){

	TEST_IGNORE();
	TEST_MESSAGE("TESTE (2+2)-(2+2)");
	interfaceCalculadora(&p1,&p2,&po);
	TEST_ASSERT_EQUAL(2,top(p1));
	TEST_ASSERT_EQUAL(2,top(p2));
	TEST_ASSERT_EQUAL(1,top(po));

	implementaLogicaCalculadora(&p1,&p2,&po,&re);
	TEST_ASSERT_EQUAL(0,top(re));	

}

void test_interface_calculadora_recebe_string_inicializa_pilhas_calculadora_e_implementa_calculadora_3(){

	TEST_MESSAGE("TESTE (2+2)-(2+2)+(1+1)");
	interfaceCalculadora(&p1,&p2,&po);
	TEST_ASSERT_EQUAL(2,top(p1));
	TEST_ASSERT_EQUAL(2,top(p2));
	TEST_ASSERT_EQUAL(1,top(po));

	implementaLogicaCalculadora(&p1,&p2,&po,&re);
	TEST_ASSERT_EQUAL(2,top(re));	

}

int main(void)
{
	UNITY_BEGIN();
	RUN_TEST(test_interface_calculadora_recebe_string_inicializa_pilhas_calculadora_2_mais_2);
	RUN_TEST(test_interface_calculadora_recebe_string_inicializa_pilhas_calculadora_e_implementa_calculadora);
	RUN_TEST(test_interface_calculadora_recebe_string_inicializa_pilhas_calculadora_e_implementa_calculadora_2);
	RUN_TEST(test_interface_calculadora_recebe_string_inicializa_pilhas_calculadora_e_implementa_calculadora_3);
/*	RUN_TEST(test_push);
	RUN_TEST(test_pop);
	RUN_TEST(test_top);
	RUN_TEST(test_empty);*/
	return UNITY_END();
}
