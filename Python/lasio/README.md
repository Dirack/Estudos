# lasio - Log ASCII Standard (LAS) files in Python

[:arrow_up: Voltar a home](https://github.com/Dirack/Estudos/tree/master/Python#estudos-sobre-python)

Lasio is a Python 3.7+ package to read and write Log ASCII Standard (LAS) files, used for borehole data such as geophysical, geological, or petrophysical logs.

[Read more...](https://lasio.readthedocs.io/en/latest/basic-example.html)

## Quick start

You can install and use lasio in python3.
There is an 'examples' module available on it. Use the commands bellow to test.

```py
import lasio
import lasio.examples
las = lasio.examples.open("1001178549.las")

las.version

print(las.curves)
```

With the commands above you import lasio and lasio.examples, you open one of the examples available
and print the curves.

The data is present as a numpy.ndarray at las.data. Test the commands bellow.

```py
las.data.shape

las.data
```

It is easy for you to iterate over the curves:

```py
for curve in las.curves:
  print(curve.mnemonic + ": " + str(curve.data))
```

The first curve in the LAS file – usually the depth – is present as las.index,
and curves are also accessible from the LASFile object as items. Check it out as follows:

```py
las.index

las["IDTN"]
```
