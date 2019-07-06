
CC = javac
DEP= tuna.class main.class

all:	$(DEP) run

%.class:	%.java
	$(CC) $<

run:	$(DEP)
	java main

clean:
	rm *.class
