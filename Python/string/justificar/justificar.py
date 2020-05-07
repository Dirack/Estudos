# coding: utf-8
#
# justificar.py (Python)
# 
# Objetivo: Estudo sobre formatação de saída de texto em python.
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

def printPicnic(itemsDict, leftWidth, rightWidth):
	print('PICNIC ITEMS'.center(leftWidth+rightWidth,'-'))
	for k,v in itemsDict.items():
		print(k.ljust(leftWidth,'.')+str(v).rjust(rightWidth))

picnicItems = {'sandwiches':4,'apples':12,'cups':4,'cookies':8000}
printPicnic(picnicItems,12,5)
printPicnic(picnicItems,20,6)
