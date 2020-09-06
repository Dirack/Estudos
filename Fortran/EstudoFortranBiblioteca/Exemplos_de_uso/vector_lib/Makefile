# Makefile 
# 
# Objetivo: Exemplo de uso da biblioteca vector_lib.f90 (Define o tipo vecto VETOR 3D)
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

all:	teste.x

%.x:	%.f90
	gfortran $< -I $(DIRACK_PATH) -o $@ -L $(DIRACK_PATH) -ldirack

