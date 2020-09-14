# coding: utf-8
#
# app.py (Python)
# 
# Objetivo: Estudo sobre criação de novas janelas com Tkinter.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 13/09/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

from tkinter import *

root = Tk()
root.title('Estudo')

def openlevel():
	global my_label
	top = Toplevel(width=100,height=100)
	top.title('Esta é uma nova janela')
	my_label = Label(top,text="oi").pack(padx=100,pady=100)
	btn2 = Button(top,text="close",command=top.destroy).pack()

btn = Button(root,text="open second window",command=openlevel).pack()

root.mainloop()
