# coding: utf-8
#
# signal.py (Python)
# 
# Objetivo: Estudo sobre sinais para processos em python.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 01/05/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.


import signal, time, sys

def handler(signum, frame):
    'signal handler for abortion [Ctrl-C]'
    sys.stderr.write('\n[Ctrl-C] Aborting...\n')
    sys.exit(-1)

signal.signal(signal.SIGINT,handler) # handle interrupt

while(True):
	print("Oi!")
	time.sleep(20)
