#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# exemplo.py (Python)
# 
# Objetivo: Estudo sobre regex em python.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 06/05/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

import re

phoneRegex = re.compile(r'\d{3}-\d{3}-\d{4}')
mo = phoneRegex.search('My number is 415-555-4242')
print('Phone number: '+mo.group())
