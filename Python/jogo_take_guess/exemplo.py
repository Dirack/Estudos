# coding: utf-8
#
# exemplo.py (Python)
# 
# Objetivo: Estudo jogo take a guess em python.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 20/03/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

import random

secretNumber=random.randint(1,20)
print('I am thinking of a number between 1 and 20')

for guessesTaken in range(1,7):
    print('Take a guess.')
    guess=int(input())

    if guess < secretNumber:
        print('Your guess is too low')
    elif guess > secretNumber:
        print('Your guess is too high')
    else:
        break

if guess == secretNumber:
    print('Good job! You guessed my number in '+str(guessesTaken)+' guesses!')
else:
    print('Nope!. The number I was thinking of was '+str(secretNumber))
