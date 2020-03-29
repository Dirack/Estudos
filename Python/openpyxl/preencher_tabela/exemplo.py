# coding: utf-8
#
# exemplo.py (Python)
# 
# Objetivo: Estido sobre preenchimento de tabelas de xlsx em python.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 29/03/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

import openpyxl

wb = openpyxl.load_workbook('estudo.xlsx')
sheet = wb.get_sheet_by_name('Minha planilha de estudos')

frutas={1:{'data':'4/5/2015 1:34:02:PM','fruta':'Apples','quantidade':73},
	2:{'data':'4/5/2015 1:34:02:PM','fruta':'Cherries','quantidade':85},
	3:{'data':'4/5/2015 1:34:02:PM','fruta':'Pears','quantidade':14},
	4:{'data':'4/5/2015 1:34:02:PM','fruta':'Oranges','quantidade':52},
	5:{'data':'4/5/2015 1:34:02:PM','fruta':'Apples','quantidade':152},
	6:{'data':'4/5/2015 1:34:02:PM','fruta':'Bananas','quantidade':23},
	7:{'data':'4/5/2015 1:34:02:PM','fruta':'Strawberries','quantidade':98}}

for i in range(1,8):
	sheet['A'+str(i)]=frutas[i]['data']
	sheet['B'+str(i)]=frutas[i]['fruta']
	sheet['C'+str(i)]=frutas[i]['quantidade']

sheet['B8']='Total'
sheet['C8']='=SUM(C1:C7)'

wb.save('estudo.xlsx')
