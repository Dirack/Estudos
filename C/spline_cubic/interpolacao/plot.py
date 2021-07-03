import matplotlib.pyplot as plt

f = open("file.txt","r")

for j in range(4):
	x=[]
	y=[]
	for i in range(100):
		sx, sy = f.readline().split()
		x.append(float(sx)) 
		y.append(float(sy))

	plt.plot(x,y,label="s_"+str(j))
plt.legend()
plt.grid()
plt.title("Interpolação com splines cúbicas")
plt.show()
