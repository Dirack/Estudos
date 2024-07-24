# Builtin functions

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
```
