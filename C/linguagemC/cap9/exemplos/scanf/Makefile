# Makefile (Shell Script)
# 
# Objetivo: Compilar os exemplos.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 24/09/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

DEP=$(wildcard *.c)

all:	$(DEP:.c=.x)

%.x:	%.c
	gcc $< -o $@

clean:
	rm *.x
