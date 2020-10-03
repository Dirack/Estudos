import unittest
from romeuejulieta import *

class TestRomeuEJulieta(unittest.TestCase):
	def test_romeuejulieta(self):
		'''
		test
		'''
		self.assertEqual("Queijo",romeuejulieta(3))
		self.assertEqual("Goiabada",romeuejulieta(5))
		self.assertEqual("Romeu e Julieta",romeuejulieta(15))
		self.assertEqual("Queijo",romeuejulieta(9))
		self.assertEqual("Romeu e Julieta",romeuejulieta(30))
	def test_specialValues(self):
		'''
		test
		'''
		self.assertIsNone(romeuejulieta(8))
		self.assertRaises(TypeError,romeuejulieta,3.5,
		"Function romeuejulieta is not rasing a type error")
		self.assertRaises(TypeError,romeuejulieta,"a string",
		"Function romeuejulieta is not rasing a type error")
