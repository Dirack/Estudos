all:	eno2interp.x

eno2interp.x:	Minterp.c
	gcc -g $< -I$$RSFSRC/include -L$$RSFSRC/lib -o $@ -lrsf -lm
	scons
	gdb -q --command=gdb_script $@

.PHONY:	eno2interp.x
