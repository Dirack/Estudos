# coding: utf-8
#
# exemploLambda.py (Python)
# 
# Objetivo: Estudo sobre funções lamda e map em python.
# 
# Versão 1.0
# 
# Site: http://www.dirackslounge.online
# 
# Programador: Rodolfo A. C. Neves (Dirack) 03/07/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: Software de uso livre e código aberto.

lista=[1,2,3]

print('lista antes: ')
print(lista)

lista2=map(lambda x: x+1, lista)

print('lista depois: ')
print(lista2)

