#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# app.py (Python)
# 
# Objetivo: Estudo sobre event handler no Tkinter.
# Um clique, imprime mensagem na tela; dois cliques
# encerra o programa.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 05/09/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

from tkinter import *

def hello(event):
	print("Single Click, Button-l")
def quit(event):
	print("Double Click, so let's stop")
	import sys; sys.exit()

widget = Button(None, text='Mouse Clicks')
widget.pack()
widget.bind('<Button-1>', hello)
widget.bind('<Double-1>', quit)
widget.mainloop()
