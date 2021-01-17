# Makefile
# 
# Objetivo: Compilação do estudo sobre ponteiros
# de função e void ponteiro como argumento de função.
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

all:	exemplo.x test

%.x:	%.c
	gcc -g $< -o $@

test:	teste.exp
	@./$<

clean:
	rm *.x

.PHONY:	clean
