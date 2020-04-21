# coding: utf-8
#
# senhas.py (Python)
# 
# Objetivo: Estudo sobre manipulação de senhas no clipboard com python.
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

passwd={'email':'12345',
	'blog':'4321'}

import sys,pyperclip
if len(sys.argv) < 2:
	print('Usage: py senhas.py [account] - copy account password')
	sys.exit()

account = sys.argv[1] # Primeiro argumento é o nome da conta

if account in passwd:
	pyperclip.copy(passwd[account])
	print('Password for '+account+' copied to clipboard.')
else:
	print('There is no account named '+account)

lixo = raw_input("Paste on something")
