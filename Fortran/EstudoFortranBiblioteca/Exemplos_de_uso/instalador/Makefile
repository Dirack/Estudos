# Makefile 
# 
# Objetivo: Exemplo de uso da instalação e utilização da biblioteca Fortran
# libdirack.
#
# 	'make install' instala a biblioteca (Se já estiver instalada, pule esta etapa)
#
#	'make run' executa o exemplo de uso
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

DIRACK_PATH = /finclude/

all:	teste.x run

install:	../../Makefile
	../../make install

%.x:	%.f90
	gfortran $< -I $(DIRACK_PATH) -o $@ -L $(DIRACK_PATH) -ldirack

run:	teste.x
	./$<

