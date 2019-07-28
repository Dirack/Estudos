#!/bin/bash
#
# Makefile
# 
# Objetivo: Estudo sobre exception em Java.
# 
# Site: http://www.dirackslounge.online
# 
# Versão 1.0
# 
# Programador: Rodolfo Dirack 27/07/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

PAC = ./except/*.java 
CC = javac
SRC = $(wildcard $(PAC))
DEP = $(SRC:.java=.class)
MAINSRC= main.java
MAIN = $(MAINSRC:.java=.class)

all:	$(DEP) $(MAIN) run

run:	$(MAIN)
	java $(MAIN:.class=)

%.class:	%.java
	$(CC) $<

clean:	
	rm $(DEP)
	rm $(MAIN)
