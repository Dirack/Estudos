#!/bin/bash
#
# Makefile
# 
# Purpose: Compile and test classes.
# 
# Site: https://dirack.github.io
# 
# Version 1.0
# 
# Programer: Rodolfo A C Neves (Dirack) 30/05/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# License: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

CC = javac
JVM = java
DEP = Vetor.java
TEST = TestVetor.java

all:	$(DEP)

%.class:	%.java
	$(CC) $<

Test%.class:	Test%.java
	$(CC) -cp junit-jupiter-api-5.0.0.jar:apiguardian-api-1.0.0.jar:. $<

test:	$(TEST:.java=.class)
	$(JVM) -jar junit-platform-console-standalone-1.6.2.jar -cp . $(addprefix -c , $(TEST:.java=)) --disable-banner

cleantest:
	rm Test*.class

clean:
	rm *.class
