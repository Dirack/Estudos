#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# exemploClasse.py (Python)
# 
# Objetivo: Exemplo sobre o uso e definicao de classes em python.
#
# __init__ is the object constructor
# __str__ is a especial method, used to return
# a string representation of the object.
# 
# Versao 1.0
# 
# Site: http://www.dirackslounge.online
# 
# Programador: Rodolfo A. C. Neves (Dirack) 02/07/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licenca: Software de uso livre e codigo aberto.

class Pessoa:

    def __init__(self, nome):
        self.nome = nome

    def __str__(self):
        return self.nome


regis = Pessoa('Regis')
print(regis)
fabio = Pessoa('Fabio')
print(fabio)

