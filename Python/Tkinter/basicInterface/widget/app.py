#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# app.py (Python)
# 
# Objetivo: Criar o primeiro widget do Tkinter.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 04/09/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.


from tkinter import *

class Application:

	def __init__(self, master=None):
		self.widget1 = Frame(master)
		self.widget1.pack()
		self.msg = Label(self.widget1, text="Primeiro widget")
		self.msg.pack ()

root = Tk()
Application(root)
root.mainloop()
