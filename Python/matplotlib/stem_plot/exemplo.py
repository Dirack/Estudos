import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0.0, 2 * np.pi, 41)
y = np.sin(x)

plt.stem(x, y)
#plt.plot(x, y)
plt.show()
