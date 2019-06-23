# Makefile 
# 
# Objetivo: Compilação do estudo sobre FlowLayout em java.
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
PAC = ./FlowLayout

all:	pacotes main.class

pacotes: $(PAC)/SegundaClasse.class

%.class:	%.java
	$(CC) $<

run:
	java main

clean:
	rm $(PAC)/*.class
	rm *.class
