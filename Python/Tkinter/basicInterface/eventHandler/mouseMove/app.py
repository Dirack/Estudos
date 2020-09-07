#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# app.py (Python)
# 
# Objetivo: Estudo sobre o evento motion.
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

def motion(event):
	print("Mouse position: (%s %s)" % (event.x, event.y))
	return

master = Tk()
whatever_you_do = '''Whatever you do will be insignificant, but it is very important that you do
it.\n(Mahatma Gandhi)'''
msg = Message(master, text = whatever_you_do)
msg.config(bg='lightgreen', font=('times', 24, 'italic'))
msg.bind('<Motion>',motion)
msg.pack()
mainloop()


