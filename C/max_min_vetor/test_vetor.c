#include "Unity/unity.h"
#include <stdlib.h>
#include <stdio.h>
#include "vetor.h"

void setUp(){};

void tearDown(){};

void test_vetor(){

	int min, max;
	int n=5, i;
	int *vet;

	vet = (int*) malloc(n*sizeof(int));
	for(i=0;i<n;i++)
		vet[i] = i+1;

	mm(vet, n, &min, &max); 

        TEST_ASSERT_EQUAL(5,max);
        TEST_ASSERT_EQUAL(1,min);
}

int main(void){
        UNITY_BEGIN();
        RUN_TEST(test_vetor);
        return UNITY_END();
}

