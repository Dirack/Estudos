teste:	teste.o
	gfortran parameterTable_lib.o teste.o -o teste

teste.o:	teste.f90 parameterTable_lib.o
	gfortran -c teste.f90

parameterTable_lib.o:	../../parameterTable_lib.f90
	gfortran -c ../../parameterTable_lib.f90

clean:
	rm *.o *.mod teste
