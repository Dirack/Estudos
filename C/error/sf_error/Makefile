# Makefile
# 
# Objetivo: Compilação e correção de exercício automatizado.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 15/04/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

DEP= sf_error.x
EXE= exercicio.c

default:
	@echo "Exercícios sobre allocação dinâmica em C."
	@echo "Para compilar utilize: make x"
	@echo "Para corrigir um exercicio utilize: make test"

x:	$(DEP)

%.x:	%.c
	gcc $< -o $@

test:	$(EXE:.c=.x)
	./teste
clean:
	rm *.x
retest:
	rm $(EXE)
