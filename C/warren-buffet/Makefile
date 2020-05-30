warren_buffet:		warren_buffet.o 
	gcc warren_buffet.o -o warren_buffet -lm

warren_buffet.o:	input.h warren_buffet.c
	gcc -c warren_buffet.c

clean:
	rm *.o

help:
	@echo "Makefile de warren_buffet.c"
