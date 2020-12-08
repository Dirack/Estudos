# Makefile 
# 
# Objetivo: Estudo sobre assembly, olá mundo!
# Compila e roda o exemplo.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 07/12/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.


hello.x:	hello.asm
	nasm -felf64 hello.asm -o hello.o
	ld -o hello.x hello.o
	./hello.x

clean:
	rm *.x *.o
