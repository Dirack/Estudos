# Makefile 
# 
# Objetivo: Compilação do estudo sobre Geme looping profissional em java.
# 
# Versão 1.0
# 
# Site: http://www.dirackslounge.online
# 
# Programador: Rodolfo A. C. Neves (Dirack) 23/06/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: Software de uso livre e código aberto.

CC = javac
PAC = ./Game

all:	pacotes main.class

pacotes: $(PAC)/FramesPerSecond.class $(PAC)/Game.class

%.class:	%.java
	$(CC) $<

run:
	java main

clean:
	rm $(PAC)/*.class
	rm *.class
