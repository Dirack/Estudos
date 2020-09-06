# Makefile
# 
# Purpose: Compile getinput_lib.f90
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

DEP=string_lib.f90 getinput_lib.f90
OBJ=$(DEP:.f90=.o)
CC=gfortran

$(OBJ):	$(DEP)

%.o:	%.f90
	$(CC) -c $<

clean:
	rm *.o
	rm *.mod
