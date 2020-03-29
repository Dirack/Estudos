# coding: utf-8
#
# exemplo.py (Python)
# 
# Objetivo: Estudo sobre manipulação de arquivos do Excel .xlsx no python.
# Criar e remover planilhas e arquivos.
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

def printsheets():
	print(wb.get_sheet_names())

# Cria o workbook e printa as tabelas
wb = openpyxl.Workbook()
wb.create_sheet()
printsheets()

# Cria nova tabela chamada first sheet
wb.create_sheet(index=0,title="First sheet")
printsheets()

# remove a planilha sheet
print("remover planilha 1")
wb.remove_sheet(wb.get_sheet_by_name("Sheet"))
printsheets()
