from mpl_toolkits.mplot3d import axes3d
import matplotlib.pyplot as plt
from math import sqrt
from math import sin
import numpy as np

fig = plt.figure()
ax = fig.add_subplot(projection='3d')

m0=2
beta=0.5
t0=1
rnip=1.5
v0=1.5
a=sin(beta/rnip)
m=[]
h=[]
t=[]

for i in range(21):
    hh=0.1*i
    mm=m0+(1/(2*a))*(1-sqrt(1+4*a*a*hh*hh))
    tt=(t0-2*rnip/v0)
    tt=tt+(rnip/v0)*sqrt(1-2*a*(mm-m0+hh)+(mm-m0+hh)*(mm-m0+hh)/(rnip*rnip))
    tt=tt+(rnip/v0)*sqrt(1+2*a*(mm-m0-hh)+(mm-m0-hh)*(mm-m0-hh)/(rnip*rnip))
    h.append(hh)
    m.append(mm)
    t.append(tt)

ax.stem(np.array(h),np.array(m),np.array(t),linefmt='-.')
ax.plot(h, m, zs=0, zdir='z', label='curve in (x, y)')
#ax.scatter(h, m, t, label='curve in (x, y)')
ax.legend()
ax.set_xlim(0, 2)
ax.set_ylim(1, 3)
ax.set_zlim(0, 2)
ax.set_xlabel('Offset',fontsize=10)
ax.set_ylabel('CMP',fontsize=10)
ax.set_zlabel('Time',fontsize=10)
plt.title('CRE Gather',fontsize=10)

plt.show()
