#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# app2.py (Python)
# 
# Objetivo: Estudo sobre a propriedade side de um Button.
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

class Application:

	def __init__(self, master=None):
		self.widget1 = Frame(master)
		self.widget1.pack(side=RIGHT)
		self.msg = Label(self.widget1, text="Primeiro widget")
		self.msg["font"] = ("Verdana", "10", "italic", "bold")
		self.msg.pack ()
		self.sair = Button(self.widget1)
		self.sair["text"] = "Sair"
		self.sair["font"] = ("Verdana", "10")
		self.sair["width"] = 5
		self.sair["command"] = self.widget1.quit
		self.sair.pack (side=RIGHT)
root = Tk()
Application(root)
root.mainloop()
