#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# app.py (Python)
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

def popup(i):

	if i==1:
		messagebox.showinfo("This is my popup!","hello world!")
	elif i==2:
		messagebox.showwarning("This is my popup!","hello world!")
	elif i==3:
		messagebox.showerror("This is my popup!","hello world!")
	elif i==4:
		messagebox.askquestion("This is my popup!","hello world!")
	elif i==5:
		messagebox.askyesno("This is my popup!","hello world!")
	else:
		messagebox.askokcancel("This is my popup!","hello world!")

Button(root,text="popup",command=lambda o=1: popup(o)).pack()
Button(root,text="popup",command=lambda o=2: popup(o)).pack()
Button(root,text="popup",command=lambda o=3: popup(o)).pack()
Button(root,text="popup",command=lambda o=4: popup(o)).pack()
Button(root,text="popup",command=lambda o=5: popup(o)).pack()
Button(root,text="popup",command=lambda o=6: popup(o)).pack()

root.mainloop()
