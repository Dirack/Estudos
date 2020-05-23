#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# circles.py (Python)
# 
# Objetivo: Estudo sobre testes unitários com python.
# Exemplo de função para calcular a área de um círculo.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 23/05/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

from math import pi

def circleArea(r):
	'''
	Return the area of a circle with radius r
	:param r: float, radius
	'''
	if type(r) not in [int,float]:
		raise TypeError("The radius must be a non-negative real number.")
	if r < 0:
		raise ValueError("The radius cannot be negative.")
	return pi*(r**2)
