# Makefile 
# 
# Objetivo: Compilação das classes e interfaces de vetor do java.
# Estudo sobre interfaces em java.
# 
# Versão 1.0
# 
# Site: http://www.dirackslounge.online
# 
# Programador: Rodolfo A. C. Neves (Dirack) 16/06/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: Software de uso livre e código aberto.

CC = javac
PAC = ./vetor

all:	pacoteVetor main.class

pacoteVetor: $(PAC)/vetorInterface.class $(PAC)/vetor2D.class $(PAC)/vetor3D.class

%.class:	%.java
	$(CC) $<

run:
	java main

clean:
	rm $(PAC)/*.class
	rm *.class
