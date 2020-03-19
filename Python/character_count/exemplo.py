# coding: utf-8
#
# exemplo.py (Python)
# 
# Objetivo: Exemplo de uso contar caracteres em python.
# 
# Site: http://www.dirackslounge.online
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 19/03/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

from pprint import pprint as p

message=raw_input("Digite algo: ")
count={}

for c in message:
    count.setdefault(c,0)
    count[c]=count[c]+1

p(count)
