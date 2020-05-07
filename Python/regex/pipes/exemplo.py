#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# exemplo.py (Python)
# 
# Objetivo: Estudo sobre pipes dentro de regex em python.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 07/05/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

import re

heroRegex = re.compile(r'Batman|Tina Fey')
mo1 = heroRegex.search('Batman and Tina Fey are heroes')
print(mo1.group())
mo2 = heroRegex.search('Tina Fey and Batman are heroes')
print(mo2.group())

batRegex = re.compile(r'Bat(man|mobile|copter|bat)')
mo = batRegex.search('Batmobile lost a wheel')
print(mo.group())
print(mo.group(1))

