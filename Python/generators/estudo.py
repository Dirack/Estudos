def square(n):
    for i in range(n):
        yield i*i

g = square(5)

try:
    print(next(g))
    print(next(g))
    print(next(g))
    print(next(g))
    print(next(g))
    print(next(g))
    print(next(g))
except:
    print('foi')

m = (i*i for i in range(5))

print(next(m))
print(next(m))
print(next(m))