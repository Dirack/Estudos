# Makefile 
# 
# Objetivo: Compilação do algoritmo de integracao numérica.
# 
# Versão 1.0
# 
# Site: http://www.dirackslounge.online
# 
# Programador: Rodolfo A. C. Neves (Dirack) 02/07/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: Software de uso livre e código aberto.

CC = gfortran
DEP = funcaoIntegrando.o integral.o integracaoNumerica.o

all:	lib run

help:
	@echo "Compilação do algoritmo de integracao numérica em integracaoNumerica.f90"

lib:	$(DEP)

%.o:	%.f90
	$(CC) -c $<

%.x:	%.o
	$(CC) $(DEP) -o $@

run:	integracaoNumerica.x
	./integracaoNumerica.x

view:	plotagem.py
	python plotagem.py

clean:
	rm *.o *.x *.mod
