all:	main.x teste.rsf
	<teste.rsf ./main.x

teste.rsf:
	sfspike n1=10 d1=0.1 o1=0. > teste.rsf

main.x:	main.c
	gcc -g $^ -I$$RSFSRC/include -I. -L$$RSFSRC/lib -o $@ -lrsf
