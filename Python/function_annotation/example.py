#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# example.py (Python)
# 
# Objetivo: Exemplo de uso de annotation.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 19/05/2021
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.


def soma(x: 'int', y: 'int') -> 'int':
	return x+y

if __name__ == "__main__":
	print("r="+str(soma(2,4)))
