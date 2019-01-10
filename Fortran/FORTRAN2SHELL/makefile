fortran2shell: fortran2shell.o
	gfortran fortran2shell.o -o fortran2shell

fortran2shell.o: fortran2shell.f90
	gfortran -c fortran2shell.f90

clean:
	rm *.o

help:
	@echo "Makefile do arquivo fortran2shell.f90"
