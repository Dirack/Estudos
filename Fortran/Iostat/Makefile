iostat: iostat.o
	gfortran iostat.o -o iostat

iostat.o: iostat.f90
	gfortran -c iostat.f90

clean:
	rm -rf *.o

help:
	@echo "Makefile do arquivo iostat.f90"
