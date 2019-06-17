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

all:	vetorInterface.class vetor2D.class vetor3D.class main.class

%.class:	%.java
	$(CC) $<

run:
	java main

clean:
	rm *.class
