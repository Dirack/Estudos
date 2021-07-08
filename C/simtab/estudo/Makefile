all:	estudo.x
	./estudo.x par1=10

%.x:	%.c
	gcc $< -o $@ -g

help:
	@echo "Estudo separador de chave=valor passado pela stdin"
	@echo "Para compilar o exemplo rodar 'make'"
clean:
	rm *.x
