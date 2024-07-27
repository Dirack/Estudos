# Builtin functions

 Exemplos de uso das funções builtin do python:
 - enumerate
 - filter
 - format
 - map
 - pow
 - range
 - round
 - slice
 - sorted
 - sum

```py
seasons = ["spring","summer","fall","winter"]

for el in enumerate(seasons):
  print(el)

def filt(word):
  if word[0]=='s':
    return True
  return False

for el in filter(filt,seasons):
  print(el)

txt = "For only {price:.2f} dollars!"
print(txt.format(price = 49))

def myfunc(n):
  return len(n)

x = map(myfunc, ('apple', 'banana', 'cherry'))

x = pow(4, 3)

x = range(3, 20, 2)
for n in x:
  print(n)

x = round(5.76543, 2)
print(x)

a = ("a", "b", "c", "d", "e", "f", "g", "h")
x = slice(0, 8, 3)
print(a[x])

a = ("b", "g", "a", "d", "f", "c", "h", "e")
x = sorted(a)
print(x)

a = (1, 2, 3, 4, 5)
x = sum(a, 7)
```
