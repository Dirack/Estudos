#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# app2.py (Python)
# 
# Objetivo: Estudo sobre a widget messagebox do tkinter.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 12/09/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

from tkinter import *
from tkinter import messagebox

root = Tk()
root.title('Estudo sobre messagebox')

def popup():
	response = messagebox.askyesno("Choose yes/no?","Choose your answer!")
	if response==1:
		Label(root,text="You clicked yes!").pack()
	else:
		Label(root,text="You clicked no!").pack()

Button(root,text="popup",command=popup()).pack()

root.mainloop()
