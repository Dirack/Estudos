# Makefile
# 
# Objetivo: Compilar os testes.
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

test:	test_troca.x

%.x:	%.c
	gcc $< ./Unity/unity.c -o $@
	./$@
	rm $@
