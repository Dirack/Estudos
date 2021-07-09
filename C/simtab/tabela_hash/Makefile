all:	_alloc.h tabela.x
	./tabela.x

tabela.x:	tabela.c _alloc.c
	gcc $^ -o $@ -g

clean:
	rm *.x

help:
	@echo "Estudo sobre tabela hash"
	@echo "Para compilar e executar use 'make'"
