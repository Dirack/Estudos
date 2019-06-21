# Makefile 
# 
# Objetivo: Makefile do estudo sobre pacotes em Java.
# 
# Versão 1.0
# 
# Site: http://www.dirackslounge.online
# 
# Programador: Rodolfo A. C. Neves (Dirack) 21/06/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: Software de uso livre e código aberto.

CC = javac

all:	pacoteMensagem pacoteTrianguloRetangulo estudoSobrePacotes.class

pacoteMensagem:	mesages/mensagem.class

pacoteTrianguloRetangulo:	trianguloRetangulo/Pitagoras.class

%.class:	%.java
	$(CC) $<

run:
	java estudoSobrePacotes

clean:
	rm mesages/*.class
	rm trianguloRetangulo/*.class
	rm *.class
