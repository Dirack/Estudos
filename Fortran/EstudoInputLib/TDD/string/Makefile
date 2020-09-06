# Makefile
# 
# Purpose: Compile testExplodeString test.
# 
# Site: http://www.dirackslounge.online
# 
# Version 1.0
# 
# Programer: Rodolfo Dirack 17/09/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# License: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

CC=gfortran
DEP=../../string_lib.f90
OBJ=$(DEP:.f90=.o)
MAIN=testExplodeString.x
MAINSRC=$(MAIN:.x=.f90)

all:	$(OBJ) $(MAIN)

%.x:	%.f90
	$(CC) $(OBJ) $< -I ../.. -o $@

%.o:	%.f90
	$(CC) -c $< -J ../.. -o $@

clean:
	rm *.x
