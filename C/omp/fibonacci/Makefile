# Makefile 
# 
# Objetivo: Compilação do exemplo.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 04/11/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

all:	exemplo.x exemplo_omp.x exemplo_omp2.x

exemplo.x:	exemplo.c
	gcc exemplo.c -o exemplo.x

exemplo_omp.x:	exemplo_omp.c
	gcc exemplo_omp.c -o exemplo_omp.x -fopenmp

exemplo_omp2.x:	exemplo_omp2.c
	gcc exemplo_omp2.c -o exemplo_omp2.x -fopenmp
