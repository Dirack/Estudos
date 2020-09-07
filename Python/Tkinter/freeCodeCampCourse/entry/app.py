# coding: utf-8
#
# app.py (Python)
# 
# Objetivo: Estudo sobre entrada de dados em Tkinter com o objeto entry.
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

e = Entry(root,
	width=50,
	borderwidth=5)
e.pack()
e.insert(0,"Enter your name: ")

def myClick():
	'''
	Exibe o nome digitado em uma label
	'''
	myLabel = Label(root,text=e.get())
	myLabel.pack()

myButton = Button(root,
		text='Enter your name',
		command=myClick)
myButton.pack()

root.mainloop()
