import matplotlib.pyplot as plt

x=[1,2,3,4,5,6,7,8,9,10]
y1=[12,10,8,14,16,18,10,12,8,12]
y2=[12,14,12,13,12,12,13,10,12,13]
y3=[10,11,8,9,10,11,8,9,12,12]

eixox = ['Semana 1','Semana 5', 'Semana 10']
plt.xticks([1,5,10],eixox) 

eixoy = ['Ruim','Regular','Bom']
plt.yticks([10,12,14],eixoy,rotation=90)

# color=red, line style = -- -. :, line width = 3, marker='o' ^ ms
# fillstyle='top','bottom','left','right'
plt.plot(x,y1,c='r',ls='-.',lw='1',marker='^',label="Func 1")
plt.plot(x,y2,c='g',ls='-.',lw='1',marker='o',label="Func 2") 
plt.plot(x,y3,c='b',ls='-.',lw='1',marker='^',fillstyle='top',label="Func 3")
plt.legend(loc="lower right")
plt.title('Exemplo de gráfico de linhas',color='black',fontsize=16)
plt.xlabel('semanas',fontsize=16)
plt.ylabel('Horas semanais',fontsize=16)
plt.show()
