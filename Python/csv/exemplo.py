#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# exemplo.py (Python)
# 
# Objetivo: Estudo sobre leitura de arquivos CSV em Python.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 23/10/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

import csv

# Abre o arquivo csv
exampleFile = open('example.csv')

# Constrói um objeto Reader para percorrer
# as linhas do arquivo
exampleReader = csv.reader(exampleFile)

# Transforma as linhas lidas em uma lista
exampleData = list(exampleReader)

# imprime os dados na tela do terminal
print(exampleData)
