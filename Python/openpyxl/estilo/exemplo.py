# coding: utf-8
#
# exemplo.py (Python)
# 
# Objetivo: Estudo sobre estilo de tabela xlsx em python.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 30/03/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

import openpyxl
from openpyxl.styles import Font

wb = openpyxl.Workbook()
sheet = wb.get_sheet_by_name('Sheet')
italic24font = Font(name='Times New Roman',size=24,italic=True)
sheet['A1'].font = italic24font
sheet.row_dimensions[1].height=70
sheet.column_dimensions['A'].width=70
sheet['A1'] = 'Hello world!'
wb.save('estudo.xlsx')

