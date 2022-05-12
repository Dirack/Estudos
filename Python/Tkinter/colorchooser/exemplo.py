import tkinter as tk
from tkinter.colorchooser import askcolor


root = tk.Tk()
root.title('Tkinter Color Chooser')
root.geometry('300x150')


def change_color():
    colors = askcolor(title="Tkinter Color Chooser")
    root.configure(bg=colors[1])


tk.Button(
    root,
    text='Select a Color',
    command=change_color).pack(expand=True)


root.mainloop()
