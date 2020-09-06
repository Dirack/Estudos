teste:		teste.o
	gfortran input_lib.o teste.o -o teste

teste.o:	teste.f90  input_lib.o
	gfortran -c teste.f90	

input_lib.o:	../../input_lib.f90
	gfortran -c ../../input_lib.f90

clean:
	rm *.o *.mod

help:
	@echo "Makefile da pasta Fortran-Biblioteca"
