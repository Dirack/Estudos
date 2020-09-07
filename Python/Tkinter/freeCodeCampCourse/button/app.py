# coding: utf-8
#
# app.py (Python)
# 
# Objetivo: Estudo sobre objeto Button do Tkinter.
# Clique no botão que uma label é gerada.
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

def myClick():
	'''
	Show a label if the button is clicked
	'''
	myLabel = Label(root,text='Look, you clicked the Button!')
	myLabel.pack()

myButton = Button(root,
	text='click here',
	padx=50,
	pady=50,
	bg='black',
	fg='white',
	command=myClick
	)
myButton.pack()

root.mainloop()
