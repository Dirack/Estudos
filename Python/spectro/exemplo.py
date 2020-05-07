#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# exemplo.py (Python)
# 
# Objetivo: Estudo sobre OO aplicada aos programas do pacote Madagascar com python.
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

from Trace import Trace

traco=Trace(1000,300,1.0)
traco.spike("teste.rsf")
traco.wave("teste.rsf","wave.rsf")
traco.plot("wave.rsf","wave.vpl")
print(traco)
traco.view("wave.vpl")
