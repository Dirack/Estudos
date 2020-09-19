import unittest
import subprocess

class TestScons(unittest.TestCase):
	def test_build1(self):
		'''
		test
		'''
		result = subprocess.call('cd ex1 && scons',shell=True)
		self.assertEqual(result,0,"EX1: Build failed!")

	def test_build2(self):
		'''
		test
		'''
		result = subprocess.call('cd ex2 && scons',shell=True)
		self.assertEqual(result,0,"EX2: Build failed!")
