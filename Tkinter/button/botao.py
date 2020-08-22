#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# botao.py (Python)
# 
# Objetivo: Estudo sobre botões em Tkinter.
# Chame uma função que imprime uma mensagem
# no terminal ao clicar o botão.
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

def clique():
	'''
	Função chamada ao clicar o botão
	'''
	print("Clique no Button!")

menu = Tk()
menu.title("Estudo sobre Button")
menu.geometry("500x300")

# Adicionar botão e vincular à função clique
btn = Button(menu,text="Botao",command=clique)
btn.pack()

menu.mainloop()
