all:	main.x

main.x:	main.c vetor.h
	gcc main.c -o main.x

test:	test_vetor.c vetor.h
	gcc test_vetor.c Unity/unity.c -o test_vetor.x
	./test_vetor.x
	rm test_vetor.x
