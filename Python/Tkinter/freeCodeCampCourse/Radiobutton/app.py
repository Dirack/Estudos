#!/usr/bin/env python
#-*- coding: utf-8 -*-
#
# app.py (Python)
# 
# Objetivo: Estudo sobre o Radiobutton do Tkinter.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 11/09/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

from tkinter import *

root = Tk()
root.title('Estudo sobre Radiobutton')

frame = LabelFrame(root,text="This is a frame",
		padx=5,pady=5)
frame.pack(padx=10,pady=10)

r = IntVar()
r.set(2)

def clicked():
	global myLabel,r,frame
	myLabel.destroy()
	myLabel=Label(frame,text=r.get())
	myLabel.pack()

Radiobutton(frame,text="Option 1",
		variable=r,
		value=1,
		command=lambda: clicked()).pack()
Radiobutton(frame,text="Option 2",
		variable=r,
		value=2,
		command=lambda: clicked()).pack()

myLabel = Label(frame,text=r.get())
myLabel.pack()

root.mainloop()
