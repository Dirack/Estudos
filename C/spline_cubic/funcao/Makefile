# Makefile
# 
# Objetivo: Estudo sobre splines cúbicos naturais em C.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 27/04/2021
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

DEP=splines_naturais.c

all:	main.x

main.x:	 main.c $(DEP:.c=.h)
	gcc $< $(DEP) -o $@ -g

clean:
	rm *.x
