import openvds

url="subset.vds"

vds=openvds.open(url)

layout=openvds.getLayout(vds)

print("Dimensões:")

for i in range(layout.getDimensionality()):
    axis=layout.getAxisDescriptor(i)

    print(f"""
        Axis{i}
        Name:{axis.getName()}
        Samples:{axis.getNumSamples()}
        Min:{axis.getCoordinateMin()}
        Max:{axis.getCoordinateMax()}
        """)