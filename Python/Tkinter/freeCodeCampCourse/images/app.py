#!/usr/bin/env python3
#
# coding: utf-8
#
# app.py (Python)
# 
# Objetivo: Estudo sobre ícones no Tkinter.
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
from PIL import ImageTk,Image

root = Tk()
root.title('Icones')

my_img = ImageTk.PhotoImage(Image.open("images/teste.jpg"))
my_label = Label(image=my_img)
my_label.pack()

root.mainloop()
