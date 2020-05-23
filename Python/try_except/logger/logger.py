#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# logger.py (Python)
# 
# Objetivo: Exemplo try, except, finally em python.# Gera um arquivo de log para armazenar a exception
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 23/05/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

import time
import logging

logging.basicConfig(filename="file.log",
		    level=logging.DEBUG)

logger = logging.getLogger()

def read_file_timed(path):
	'''
	Open and read binary data file
	:param path: string, absolute path to file
	'''
	start_time = time.time()
	try:
		f = open(path,mode="rb")
		data = f.read()
		return data
	except FileNotFoundError as err:
		logger.error(err)
		raise
	else:
		f.close()
	finally:
		stop_time = time.time()
		dt=stop_time-start_time
		logger.info("Time required for {filepath} = {time}".format(filepath=path,time=dt))

data = read_file_timed("inexistente.png")
