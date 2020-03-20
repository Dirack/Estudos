# coding: utf-8
#
# exemplo.py (Python)
# 
# Objetivo: Estudo sobre dicionários em python com uma lista de picnic.
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

allGuest={'Alice':{'apples':5,'pretzels':12},
        'Bob':{'ham sandwiches':3,'apples':2},
        'Carol':{'cups':3,'apple pies':1}}

def totalBrought(guests,item):
    numBrought=0
    for k,v in guests.items():
        numBrought=numBrought+v.get(item,0)
    return numBrought

print('Number of things being brought:')
print('Apples '+str(totalBrought(allGuest,'apples')))
print('Cups '+str(totalBrought(allGuest,'cups')))
print('Cakes '+str(totalBrought(allGuest,'cakes')))
print('Ham sandwiches '+str(totalBrought(allGuest,'ham sandwiches')))
print('Apple pies '+str(totalBrought(allGuest,'apple pies')))
