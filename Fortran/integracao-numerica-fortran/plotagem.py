# plotagem.py (Python)
# 
# Objetivo:
# 
# Versao 1.0
# 
# Site: http://www.dirackslounge.online
# 
# Programador: Rodolfo A. C. Neves (Dirack) 02/07/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licenca: Software de uso livre e codigo aberto.

import csv
import matplotlib.pyplot as plt

arquivo=open('Integral.csv','r')
legendas=open('parametros_ABC.dat','r')

data=csv.reader(arquivo)

x=[]
y=[]

for linha in data:
	x.append(float(linha[0]))
        y.append(float(linha[1]))

arquivo.close()

print("O vetor x tem "+str(len(x))+" pontos")
print("O vetor y tem "+str(len(y))+" pontos")

numGraficos=int(len(x)/500)
legenda=legendas.readlines()
legendas.close()

for i in range(numGraficos):

	zi=500*i
	zf=500*i+499
	plt.plot(x[zi:zf],y[zi:zf],label=legenda[i])

plt.legend(bbox_to_anchor=(1.05, 1), loc=2, borderaxespad=0.)
plt.title('Exemplo')
plt.xlabel('x')
plt.ylabel('F(x)')
plt.show()
