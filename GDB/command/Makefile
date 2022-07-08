all:	quadrado.x GDB

# Compilação para o GDB
quadrado.x:	quadrado.c
	gcc -g quadrado.c -o quadrado.x

GDB:	quadrado.x gdb_script
	gdb --command=gdb_script $<

clean:
	rm *.x; rm gdb.output
