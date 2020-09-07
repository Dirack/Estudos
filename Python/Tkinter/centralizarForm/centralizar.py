#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# centralizar.py (Python)
# 
# Objetivo: Estudo sobre dimensões do formulário
# em Tkinter.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 22/08/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

from tkinter import *

menu = Tk()
menu.title("Estudo sobre Button")

largura = 500
altura = 300

largura_screen = menu.winfo_screenwidth()
altura_screen = menu.winfo_screenheight()
posx = largura_screen/2 - largura/2
posy = altura_screen/2 - altura/2

menu.geometry("%dx%d+%d+%d" %
	(largura,altura,posx,posy))

menu.mainloop()
