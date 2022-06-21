all:	teste.x teste2.x

teste.x:	Mteste.c blas.c
	gcc $^ -I$$RSFSRC/include -I$$RSFSRC/api/c -L$$RSFSRC/lib -L$$RSFSRC/api/c -o $@ -lrsf -lm -lblas

teste2.x:	Mteste2.c blas.c
	gcc $^ -I$$RSFSRC/include -I$$RSFSRC/api/c -L$$RSFSRC/lib -L$$RSFSRC/api/c -o $@ -lrsf -lm -lblas

clean:
	rm teste.x; rm teste2.x

.PHONY:	teste.x teste2.x
