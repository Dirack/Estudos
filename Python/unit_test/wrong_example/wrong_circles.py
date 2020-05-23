#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# circles.py (Python)
# 
# Objetivo: Estudo sobre testes unitários com python.
# Exemplo de programa mal projetado.
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
	return pi*(r**2)

# Test function
radii = [2,0,-3,2+5j,True,"radius"]
message = "Area of circles with r = {radius} is {area}."

for r in radii:
	A = circleArea(r)
	print(message.format(radius=r, area=A))
