# coding: utf-8
#
# clipboard.py (Python)
# 
# Objetivo: Estudo sobre manipulação da área de transferência com python.
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

import pyperclip
text = pyperclip.paste()

# Separa as linhas e acrescenta os asteriscos

lines = text.split('\n')
for i in range(len(lines)):
	lines[i] = '*' + lines[i]

text = '\n'.join(lines)
pyperclip.copy(text)

lixo = raw_input("Paste on somewhere with ctr+v")
