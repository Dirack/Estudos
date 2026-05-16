import openvds
import numpy as np
import matplotlib.pyplot as plt

vds=openvds.open("subset.vds")

access_manager=openvds.getAccessManager(vds)

layout=openvds.getLayout(vds)

iline=10

request=access_manager.requestVolumeSubset(
    min=(iline,0,0),
    max=(iline+1,
    layout.getAxisDescriptor(1).getNumSamples(),
    layout.getAxisDescriptor(2).getNumSamples())
)

data=request.data

slice_2d=np.array(data).reshape(
    layout.getAxisDescriptor(1).getNumSamples(),
    layout.getAxisDescriptor(2).getNumSamples()
)

plt.imshow(slice_2d,cmap="gray")
plt.title(f"Inline{iline}")
plt.show()