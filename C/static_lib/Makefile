all:	main.x

main.x:	lib/liballoc.a include/_alloc.h
	gcc main.c -Llib -Iinclude -lalloc -o main.x

lib/liballoc.a:	src/_alloc.c
	gcc -c src/_alloc.c -o lib/_alloc.o
	ar -rc lib/liballoc.a lib/_alloc.o
	ranlib lib/liballoc.a

clean:
	rm main.x; rm lib/*.a lib/*.o
