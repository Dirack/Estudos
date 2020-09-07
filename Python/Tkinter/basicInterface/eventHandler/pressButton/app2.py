#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# app2.py (Python)
# 
# Objetivo: Estudo do evento press Button através do command.
# Um clique, o frame se expande.
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
		self.widget1.pack()
		self.msg = Label(self.widget1, text="Primeiro widget")
		self.msg["font"] = ("Calibri", "9", "italic")
		self.msg.pack ()
		self.sair = Button(self.widget1)
		self.sair["text"] = "Clique aqui"
		self.sair["font"] = ("Calibri", "9")
		self.sair["width"] = 10
		self.sair["command"] = self.mudarTexto
		self.sair.pack ()

	def mudarTexto(self):
		if self.msg["text"] == "Primeiro widget":
			self.msg["text"] = "O botão recebeu um clique"
		else:
			self.msg["text"] = "Primeiro widget"



root = Tk()
Application(root)
root.mainloop()
