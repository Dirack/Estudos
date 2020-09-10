#!/usr/bin/env python3
#
# coding: utf-8
#
# app.py (Python)
# 
# Objetivo: Criar uma GUI que faz o slide de várias imagens.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 09/09/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

from tkinter import *
from PIL import ImageTk,Image

root = Tk()
root.title('Image Slide')

imagesList = ['images/img1.jpg',
	      'images/img2.jpg',
	      'images/img3.jpg']

images=[]
for img in imagesList:
	images.append(ImageTk.PhotoImage(Image.open(img)))

currentImageIndex = 0
myLabel = Label(image=images[currentImageIndex])
myLabel.grid(row=0,column=0,columnspan=3)

counterText = str(currentImageIndex+1)+'/'+str(len(images))
counter = Label(root,text=counterText)
counter.grid(row=1,column=1)

def nextPhoto():
	'''
	Change from the current image to the next
	'''
	global myLabel 
	global currentImageIndex
	global images
	global counter
	global root

	if (currentImageIndex+1) >= len(images):
		return
	currentImageIndex = currentImageIndex+1
	counterText = str(currentImageIndex+1)+'/'+str(len(images))
	myLabel.grid_forget()
	myLabel = Label(image=images[currentImageIndex])
	myLabel.grid(row=0,column=0,columnspan=3)
	counter.grid_forget()
	counter = Label(root,text=counterText)
	counter.grid(row=1,column=1)

def prevPhoto():
	'''
	Change from the current image to the previous
	'''
	global myLabel 
	global currentImageIndex
	global images
	global counter
	global root

	if (currentImageIndex-1) < 0:
		return
	currentImageIndex = currentImageIndex-1
	counterText = str(currentImageIndex+1)+'/'+str(len(images))
	myLabel.grid_forget()
	myLabel = Label(image=images[currentImageIndex])
	myLabel.grid(row=0,column=0,columnspan=3)
	counter.grid_forget()
	counter = Label(root,text=counterText)
	counter.grid(row=1,column=1)

buttonNext = Button(root,
		    text="Next",
		    command=nextPhoto,
		    padx=20,
		    pady=30)
buttonNext.grid(row=1,column=0)


buttonPrev = Button(root, text="Prev", command=prevPhoto,padx=20,pady=30)
buttonPrev.grid(row=1,column=2)


root.mainloop()
