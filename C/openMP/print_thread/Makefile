# Makefile
# 
# Objetivo: Compilar e rodar o exemplo de uso.
#
# IMPORTANTE: Utilize a variável OMP_NUM_THREADS para controlar
# o número de threads utilizadas pelo processo.
#
# export OMP_NUM_THREADS=4
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 31/07/2021
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

all:	hello.x

%.x:	%.c
	gcc -fopenmp $< -o $@
	./$@

help:
	@echo "Utilize 'make' para compilar e rodar o exemplo"

clean:
	rm *.x
