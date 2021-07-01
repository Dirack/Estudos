all:	main.x
	./main.x || echo 'Configure a variável LD_LIBRARY_PATH=$$LD_LIBRARY_PATH:$$PWD'

view:	main.x # View shared libs that main.x uses
	ldd main.x

main.x:	main.c libTest.so
	gcc main.c libTest.so -o main.x

libTest.so:	libTest.o
	gcc -shared -o $@ $<

libTest.o:	_alloc.c _alloc.h
	gcc -c -fPIC _alloc.c -o libTest.o

clean:
	rm *.x *.o *.so
