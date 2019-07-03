# coding: utf-8
# 
# lacoEmLista.py (Python)
# 
# Objetivo: Exemplificar laço com chaves e valores da lista sendo mostrados na tela.
# 
# Site: www.dirackslounge.online
# 
# Versão 1.0
# 
# Programador: Rodolfo A. C. Neves (Dirack) 03/07/2019
# 
# Email: rodolfo_profisional@hotmail.com
# 
# Licença: Software de uso livre e código aberto.


valores=[]
valores.append(5)
valores.append(10)
valores.append(2)

for c, v in enumerate(valores):
    print(f'posicao{c} valor{v}')
