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
