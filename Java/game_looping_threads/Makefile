# Makefile 
# 
# Objetivo: Compilação do estudo sobre game looping e threads em java.
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
GAME = ./Game
PAC = $(GAME)/FramesPerSecond.class $(GAME)/FrameGame.class $(GAME)/RenderGame.class

all:	libed main.class

libed:	$(PAC)

%.class:	%.java
	$(CC) $<

run:
	java main

clean:
	rm $(PAC)
	rm *.class
