#!/bin/bash
#
# Makefile (Shell Script)
# 
# Objetivo: Compilar testes das questões.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 22/09/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

DEP = test_questao1.x test_questao2.x test_questao3.x

all:	$(DEP)

%.x:	%.c
	gcc $< ./Unity/unity.c -o $@
	./$@
