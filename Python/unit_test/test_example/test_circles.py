#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# test_circles.py (Python)
# 
# Objetivo: Teste unitário da função circleArea.
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

import unittest
from circles import circleArea
from math import pi

class TestCircleArea(unittest.TestCase):
	def test_area(self):
		'''
		test areas when radius >=0
		'''
		self.assertAlmostEqual(circleArea(1),pi)
		self.assertAlmostEqual(circleArea(0),0)
		self.assertAlmostEqual(circleArea(2.1),pi*2.1**2)

	def test_values(self):
		'''
		Make sure value errors are raised when necessary
		'''
		self.assertRaises(ValueError,circleArea,-2)

	def test_types(self):
		'''
		Make sure type errors are raised when necessary
		'''
		self.assertRaises(TypeError,circleArea,3+5j)
		self.assertRaises(TypeError,circleArea,True)
		self.assertRaises(TypeError,circleArea,"radius")
