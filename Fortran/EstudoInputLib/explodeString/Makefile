# Makefile
# 
# Purpose: Compile main.f90
# 
# Site: http://www.dirackslounge.online
# 
# Version 1.0
# 
# Programer: Rodolfo Dirack 29/09/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# License: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

DEP=main.f90
OBJ=$(DEP:.f90=.x)
CC=gfortran

all: $(OBJ) run

$(OBJ):	$(DEP)

run:
	./$(OBJ)

%.x:	%.f90
	$(CC) $< -o $@

clean:
	rm *.o
	rm *.mod
