# Makefile 
# 
# Objetivo: Compilar 'aleat.c' (Gerador de números aleatórios).
# 
# Versão 1.0
# 
# Site: http://www.dirackslounge.online
# 
# Programador: Rodolfo A. C. Neves (Dirack) 18/06/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: Software de uso livre e código aberto.

CC = gcc

all:	aleat.x run

run:
	./aleat.x

%.x:	%.c
	$(CC) $< -o $@

clean:
	rm *.x
