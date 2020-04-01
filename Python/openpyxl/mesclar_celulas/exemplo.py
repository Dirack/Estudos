# coding: utf-8
#
# exemplo.py (Python)
# 
# Objetivo: Estudo sobre mesclar células de tabela xlsx em python.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 31/03/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

import openpyxl

wb = openpyxl.Workbook()
sheet = wb.get_active_sheet()
sheet.merge_cells('A1:D3')

sheet['A1'] = '12 células mescladas'
sheet.merge_cells('C5:D5')
sheet['C5'] = '2 células mescladas'

wb.save('mescladas.xlsx')

sheet.unmerge_cells('A1:D3')
sheet.unmerge_cells('C5:D5')

wb.save('desmescladas.xlsx')
