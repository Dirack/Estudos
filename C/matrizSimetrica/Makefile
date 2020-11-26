all:	main.x

test:	test_matriz.x

main.x:	main.c matriz.h matriz.c
	gcc main.c matriz.c -o matriz.x
	./matriz.x

test_matriz.x:	test_matriz.c matriz.c Unity/unity.c
	gcc test_matriz.c matriz.c Unity/unity.c -o test_matriz.x
	./test_matriz.x

clean:
	rm *.x
