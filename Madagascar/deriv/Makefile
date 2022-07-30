# Makefile
#
# Objetivo: Compilação e execução deste exemplo de uso com 'make'
# 
# Site: "https://www.geofisicando.com"
# 
# Versão 1.0
# 
# Programador: "Rodolfo A C Neves (Dirack)" 30/07/2022
# 
# Email: "rodolfo_profissional@hotmail.com"
# 
# Licença: "GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>".

all:	main.x
	scons view

main.x:	main.c
	gcc -g $^ -I$$RSFSRC/include -I. -L$$RSFSRC/lib -o $@ -lrsf -lm

clean:
	scons -c && rm main.x

help:
	@echo "Run 'make' to compile and run example"
