# coding: utf-8
#
# exemplo.py (Python)
# 
# Objetivo: Estudo sobre read e input em Python.
# 
# Site: http://www.dirackslounge.online 
# 
# Versão 1.0
# 
# Programador:  Rodolfo A. C. Neves (Dirack) 01/03/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: Software de uso livre e código aberto.


passwdFile = open('secretPasswdFile.txt')
secretPasswd = str(''.join(passwdFile.read().strip()))
print(type(secretPasswd))

print('Enter password:')
typePasswd = str(input())
print(type(typePasswd))

print(typePasswd == secretPasswd)

if typePasswd == secretPasswd:
    
    print('Acess Granted')
    
    if typePasswd == '12345':
        print('That password is easy')
else:
    print('Acess denied')
