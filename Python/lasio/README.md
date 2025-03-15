# lasio - Log ASCII Standard (LAS) files in Python

[:arrow_up: Voltar a home](https://github.com/Dirack/Estudos/tree/master/Python)

https://lasio.readthedocs.io/en/latest/basic-example.html

```py
>>> import lasio
>>> import lasio.examples
>>> las = lasio.examples.open("1001178549.las")

las.version

print(las.curves)
```

The data is present as a numpy.ndarray at las.data:

```py
las.data.shape

las.data
```

Although it might be easier for you to iterate over the curves:

```py
>>> for curve in las.curves:
...     print(curve.mnemonic + ": " + str(curve.data))
```

The first curve in the LAS file – usually the depth – is present as las.index, and curves are also accessible from the LASFile object as items. For example:

```py
>>> las.index
array([1783.5 , 1783.75, 1784.  , 1784.25, 1784.5 ])
>>> las["IDTN"]
```
