import matplotlib.pyplot as plt

f = open("file.txt","r")

x=[]
senx=[]
dydx=[]
for linha in f:
	sx, ssx, sdy = linha.split()
	x.append(float(sx)) 
	senx.append(float(ssx))
	dydx.append(float(sdy))

plt.plot(x,senx,label="sen(x)")
plt.plot(x,dydx,label="dy/dx=cos(x)")
plt.legend()
plt.grid()
plt.title("Derivada com diferenças finitas")
plt.show()
