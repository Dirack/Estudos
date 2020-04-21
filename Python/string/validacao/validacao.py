#! python3
# coding: utf-8
#
# validacao.py (Python)
# 
# Objetivo: Estudo sobre validação de strings com python.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 21/04/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

while True:
	print('Enter your age:')
	age = input()
	if age.isdecimal():
		break
	print('Please enter a number for your age.')

while True:
	print('Select a new password (letters and numbers only):')
	password = input()
	if password.isalnum():
		break
	
	print('Passwords can only have letters and numbers.')
