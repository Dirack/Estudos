# coding: utf-8
#
# exemplo.py (Python)
# 
# Objetivo: Estudo sobre congelar linha de painel de tabela xlsx.
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
sheet.freeze_panes = 'A2'
wb.save('freezeExample.xlsx')
