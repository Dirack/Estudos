# coding: utf-8
#
# exemplo.py (Python)
# 
# Objetivo: Estudo sobre dicionários para armazenar aniversários.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 20/03/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

birthday={'Alice':'Apr 1','Bob':'Dec 12','Carol':'Mar 4'}

while True:
    print('Enter a name: (blank to quit)')
    name=raw_input()
    if name=='':
        break

    if name in birthday:
        print(birthday[name]+' is the birthday of '+name)
    else:
        print('I do have birthday information for '+name)
        print('What is their birthday?')
        bday = input()
        birthday[name]=bday
        print('Birthday database updated')
