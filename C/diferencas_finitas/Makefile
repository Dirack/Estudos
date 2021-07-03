all:	main.x
	./main.x

main.x:	main.c
	gcc main.c -o main.x -lm

view:	plot.py main.x
	./main.x > file.txt
	python3 plot.py

help:
	@echo "Compilação do exemplo de utilização do método de diferenças finitas"
	@echo "Basta rodas make para compilar e rodar"
	@echo "make view para visualizar com python3 e matplotlib"

clean:
	rm *.x
