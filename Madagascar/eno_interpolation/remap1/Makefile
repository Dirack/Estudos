all:	interp.x

interp.x:	Minterp.c
	gcc $< -I$$RSFSRC/include -L$$RSFSRC/lib -o $@ -lrsf -lm
	scons

debug:	eno2interp.x

eno2interp.x:	Minterp.c
	gcc -g $< -DGDB_DEBUG -I$$RSFSRC/include -L$$RSFSRC/lib -o $@ -lrsf -lm
	scons testein.rsf
	gdb -q --command=gdb_script $@

clean:
	scons -c
	rm eno2interp.x interp.x

help:
	@echo "Run the following commands":
	@echo "make (To run the example)"
	@echo "make debug (to generate a GDB version of the program)"

.PHONY:	interp.x eno2interp.x clean
