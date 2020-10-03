import unittest

def soma(a,b):
	return a+b

class TestSoma(unittest.TestCase):
	def test_soma(self):
		self.assertEqual(4,soma(2,1))
