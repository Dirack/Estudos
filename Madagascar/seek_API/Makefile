all:	main.x
	scons && <teste.rsf ./main.x

main.x:	main.c
	gcc -g $^ -I$$RSFSRC/include -I. -L$$RSFSRC/lib -o $@ -lrsf

clean:
	scons -c && rm main.x
