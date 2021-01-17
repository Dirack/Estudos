# Makefile
# 
# Objetivo: Compilar 'exemplo2.c' testado com o programa expect
# a partir de 'script.exp'.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 17/01/2021
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

DEP = exemplo2.x

all:	$(DEP) test

%.x:	%.c
	gcc -g $^ -o $@

test:	$(DEP) script.exp
	@./script.exp

clean:
	rm *.x

.PHONY:	clean test
