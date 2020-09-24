/*
* test_string.c (C)
* 
* Objetivo: Teste das funções da versão de 'string.h'.
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
#include "string.h"

void setUp(void){};
void tearDown(void){};

void test_strlen(void){
	char str[]="Rodolfo";
	TEST_ASSERT_EQUAL(7,newstrlen(str));
}

void test_strcmp(void){
	char s1[]="Rodolfo";
	char s2[]="Adolfo";
	char s3[]="Rodolfo";

	TEST_ASSERT_TRUE(newstrcmp(s1,s2)>0);
	TEST_ASSERT_TRUE(newstrcmp(s2,s1)<0);
	TEST_ASSERT_TRUE(newstrcmp(s1,s3)==0);
}

int main(void){
	UNITY_BEGIN();
	RUN_TEST(test_strlen);
	RUN_TEST(test_strcmp);
	return UNITY_END();
}
