#!/bin/bash
#
# Makefile (Shell Script)
# 
# Objetivo:
# 
# Site: http://www.dirackslounge.online
# 
# Versão 1.0
# 
# Programador: Rodolfo Dirack 12/07/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

CC=javac
PAC=./Game
DEP=$(PAC)/Game.class $(PAC)/Player.class

all:	libbed run

libbed:	$(DEP)

run:	main.class
	java main

%.class:	%.java
	$(CC) $<
