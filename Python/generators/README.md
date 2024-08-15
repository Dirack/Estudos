# Exemplo de generators em python

Este é um exemplo de uso de generators em python. Funcionam como as list comprehensions, mas os valores não são armazenados em memória
são calculados quando necessário.

```py
# def square(nums):
#     for i in nums:
#         yield (i*i)

# my_nums = square([1,2,3,4,5])

my_nums = (i*i for i in [1,2,3,4,5])

for n in my_nums:
    print(n)
```
