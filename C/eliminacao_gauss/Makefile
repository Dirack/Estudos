# Makefile
# 
# Objetivo: Compilar estudo eliminação de Gauss.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves 27/06/2021
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

all:	main.x main2.x
	./main.x
	./main2.x

%.x:	%.c
	gcc $< -o $@ -g

clean:
	rm *.x
