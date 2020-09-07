# coding: utf-8
#
# calculator.py (Python)
# 
# Objetivo: Projeto de uma calculadora em Tkinter.
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
import re

root = Tk()
root.title('Simple calculator')

e = Entry(root, width=35, borderwidth=5)
e.grid(row=0,column=0,columnspan=3,padx=10,pady=10)

def calculate(string):

	regex = re.compile(r'\+|\-|\*|\/')
	calc = regex.search(string)
	if calc:
		delim = calc.group()
	else:
		return None
	l = filter(None,string.split(delim))
	l = map(lambda i: str(float(i)),l)
	
	return eval(delim.join(l))

def buttonAdd(text):
	if text=='clear':
		e.delete(0,END)
		return
	if text=='=':
		result = calculate(e.get())
		buttonAdd('clear')
		e.insert(0,str(result))
		return
	current = e.get()
	e.delete(0,END)
	e.insert(0,str(current)+str(text))

for j in range(0,3,1):
	
	for i in range(0,3,1):
		text = str((i+1)+j*3)
		button = Button(root,
			 text=text,
			 padx=40,
			 pady=20,
			 command=lambda text=text: buttonAdd(text))

		button.grid(row=3-j,column=i)

especialButtons = {
	'zero':
	{'text':'0','row':4,'column':0,'padx':40,'pady':20,'span':False},

	'multiply':
	{'text':'*','row':4,'column':1,'padx':40,'pady':20,'span':False},

	'divide':
	{'text':'/','row':4,'column':2,'padx':42,'pady':20,'span':False},

	'subtract':
	{'text':'-','row':5,'column':0,'padx':41,'pady':20,'span':False},

	'clear':
	{'text':'clear','row':5,'column':1,'padx':80,'pady':20,'span':True},

	'plus':
	{'text':'+','row':6,'column':0,'padx':38,'pady':20,'span':False},

	'equals':
	{'text':'=','row':6,'column':1,'padx':91,'pady':20,'span':True}
}	
for k,v in especialButtons.items():
	button = Button(root,
			text=v['text'],
			padx=v['padx'],
			pady=v['pady'],
			command=lambda text=v['text']: buttonAdd(text))
	if v['span']:
		button.grid(row=v['row'],column=v['column'],columnspan=2)
	else:
		button.grid(row=v['row'],column=v['column'])

root.mainloop()
