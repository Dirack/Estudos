CC = gcc
TEST = test_pilha.x test_operadores.x test_calculadora.x
UNITY = Unity/unity.c

all:	$(TEST)

test_%.x:	test_%.c
	$(CC) $< $(UNITY) -o $@
	./$@
	rm $@
