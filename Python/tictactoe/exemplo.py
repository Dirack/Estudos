# coding: utf-8
#
# exemplo.py (Python)
# 
# Objetivo: Estudo sobre dicionários em python com jogo da velha.
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

theBoard={'tl':' ','tm':' ','tr':' ','ml':' ','mm':' ','mr':' ','ll':' ','lm':' ','lr':' '}

def printBoard(board):
    print(board['tl']+'|'+board['tm']+'|'+board['tr'])
    print('-+-+-')
    print(board['ml']+'|'+board['mm']+'|'+board['mr'])
    print('-+-+-')
    print(board['ll']+'|'+board['lm']+'|'+board['lr'])

turn='X'
for i in range(9):
    printBoard(theBoard)
    print('Turn for '+turn+'. Move on which space?')
    move=raw_input()
    theBoard[move]=turn
    if turn=='X':
        turn='0'
    else:
        turn='X'
printBoard(theBoard)
