#include "Unity/unity.h"
#include "matriz.h"

MatrizSimetrica* mp;

void setUp(){

	//printf("%d\n",indiceVetorElementosMatrizSimetrica(0,0));

};

void tearDown(){};

void test_criar_matriz_simetrica_2_por_2_e_acessar_elementos_atribuidos(){
/* Este teste utiliza a matriz:
 *
 * 	1 2
 * 	2 4
 */

	int i;
	mp = criaMatrizSimetrica(2);
	atribui(mp,0,0,1.0);
	atribui(mp,0,1,2.0);
	atribui(mp,1,1,4.0);

	/* Descomentar para imprimir o vetor mp->v[k]
	printf("Print do vetor alocado da matriz\n");
	for(i=0;i<4;i++)
		printf("%f\n",mp->v[i]);*/

	TEST_ASSERT_FLOAT_WITHIN(0.01,1.0,acessa(mp,0,0));
	TEST_ASSERT_FLOAT_WITHIN(0.01,2.0,acessa(mp,0,1));
	TEST_ASSERT_FLOAT_WITHIN(0.01,2.0,acessa(mp,1,0));
	TEST_ASSERT_FLOAT_WITHIN(0.01,4.0,acessa(mp,1,1));
	
	libera(mp);
}

void test_criar_matriz_simetrica_4_por_4_e_acessar_elementos_atribuidos(){
/* Este teste utiliza a matriz:
 *
 * 	1 2 3 4
 * 	2 1 2 3
 * 	3 2 1 2
 * 	4 3 2 1
 */

	int i;
	mp = criaMatrizSimetrica(4);
	atribui(mp,0,0,1.0);
	atribui(mp,0,1,2.0);
	atribui(mp,0,2,3.0);
	atribui(mp,0,3,4.0);
	atribui(mp,1,1,1.0);
	atribui(mp,1,2,2.0);
	atribui(mp,1,3,3.0);
	atribui(mp,2,2,1.0);
	atribui(mp,2,3,2.0);
	atribui(mp,3,3,1.0);
	
	/* Decomentar para imprimir o vetor mat->v[k]
	printf("Print do vetor alocado da matriz\n");
	for(i=0;i<16;i++)
		printf("%f\n",mp->v[i]);*/

	/* Testar elementos da diagonal principal */
	TEST_ASSERT_FLOAT_WITHIN(0.01,1.0,acessa(mp,0,0));
	TEST_ASSERT_FLOAT_WITHIN(0.01,1.0,acessa(mp,1,1));
	TEST_ASSERT_FLOAT_WITHIN(0.01,1.0,acessa(mp,2,2));
	TEST_ASSERT_FLOAT_WITHIN(0.01,1.0,acessa(mp,3,3));

	/* Testar elementos acima da diagonal principal */	
	TEST_ASSERT_FLOAT_WITHIN(0.01,2.0,acessa(mp,0,1));
	TEST_ASSERT_FLOAT_WITHIN(0.01,2.0,acessa(mp,1,2));
	TEST_ASSERT_FLOAT_WITHIN(0.01,2.0,acessa(mp,2,3));

	TEST_ASSERT_FLOAT_WITHIN(0.01,3.0,acessa(mp,0,2));
	TEST_ASSERT_FLOAT_WITHIN(0.01,3.0,acessa(mp,1,3));

	TEST_ASSERT_FLOAT_WITHIN(0.01,4.0,acessa(mp,0,3));

	/* Testar elementos abaixo da diagonal principal */
	TEST_ASSERT_FLOAT_WITHIN(0.01,2.0,acessa(mp,1,0));
	TEST_ASSERT_FLOAT_WITHIN(0.01,2.0,acessa(mp,2,1));
	TEST_ASSERT_FLOAT_WITHIN(0.01,2.0,acessa(mp,3,2));

	TEST_ASSERT_FLOAT_WITHIN(0.01,3.0,acessa(mp,2,0));
	TEST_ASSERT_FLOAT_WITHIN(0.01,3.0,acessa(mp,3,1));

	TEST_ASSERT_FLOAT_WITHIN(0.01,4.0,acessa(mp,3,0));

	libera(mp);
}

int main(void){
	UNITY_BEGIN();
	RUN_TEST(test_criar_matriz_simetrica_2_por_2_e_acessar_elementos_atribuidos);
	RUN_TEST(test_criar_matriz_simetrica_4_por_4_e_acessar_elementos_atribuidos);
	return UNITY_END();
}
