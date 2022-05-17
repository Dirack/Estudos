all:	main.x
	scons view

main.x:	main.c
	gcc -g $^ -I$$RSFSRC/include -I. -L$$RSFSRC/lib -o $@ -lrsf -lm

clean:
	scons -c && rm main.x
