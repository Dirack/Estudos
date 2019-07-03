# coding: utf-8
# exemplo.py (Python)
# 
# Objetivo:
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

from pacote import numeros
from pacote.uteis.classeCachorro import Cachorro as Dog

print(numeros.somar(2,2))
print(numeros.subtrair(2,2))
print(numeros.multiplicar(2,2))
print(numeros.dividir(2,2))

lika=Dog('Lika',7)
lika.mostrarNome()
lika.mostrarIdade()
lika.latir()
