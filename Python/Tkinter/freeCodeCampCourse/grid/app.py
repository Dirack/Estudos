#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# app.py (Python)
# 
# Objetivo: Estudo sobre grid do Tkinter.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 07/09/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

from tkinter import *

root = Tk()

myLabel1 = Label(root,text="Label 1")
myLabel2 = Label(root,text="Label 2")

myLabel1.grid(row=0,column=0)
myLabel2.grid(row=1,column=0)

root.mainloop()
