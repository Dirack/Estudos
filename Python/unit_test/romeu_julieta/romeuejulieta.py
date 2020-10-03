#!usr/bin/env python3

def romeuejulieta(n):
	if type(n) not in [int]:
		raise TypeError("n should be integer")
	tres=(n % 3 == 0)
	cinco=(n % 5 == 0)

	if cinco and tres:
		return "Romeu e Julieta"
	elif tres:
		return "Queijo"
	elif cinco:
		return "Goiabada"
	else:
		return None
