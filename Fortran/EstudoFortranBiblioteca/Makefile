# Makefile 
# 
# Objetivo: Instalar a biblioteca Fortran 'libdirack' em uma pasta no diretório DIRACK_PATH.
# Os módulos e o arquivo libdirack.so estarão todos em DIRACK_PATH, para utilizar basta adicionar
# USE modulo_lib no seu programa e compilar utilizando as diretivas:
#
#	gfortran teste.f90 -I /finclude/ -o teste.x -L/finclude -ldirack
# 
# Versão 1.0
# 
# Site: http://www.dirackslounge.online
# 
# Programador: Rodolfo A. C. Neves (Dirack) 10/06/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: Software de uso livre e código aberto.

DIRACK_PATH = /finclude

all:
	@echo "Instalador da biblioteca libdirack (Fortran 90)"
	@echo "Rodolfo Dirack 11/06/2019"
	@echo "Digite make install para instalar a biblioteca na pasta $(DIRACK_PATH)"

install:	obj instalar

obj:	input_lib.o \
	math_lib.o \
	vector_lib.o \
	physics_lib.o \
	libdirack.so

%.o:	%.f90
	gfortran -fPIC -c $<

%.so:	
	gfortran -shared -o libdirack.so ./*.o	

instalar:	libdirack.so
	sudo mv *.mod /finclude
	sudo mv libdirack.so /finclude
	rm *.o
