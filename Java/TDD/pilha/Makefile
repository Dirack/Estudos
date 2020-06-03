#!/bin/bash
#
# Makefile
# 
# Purpose: Compile and test game classes.
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
DEP = 
TEST = TestPilha.java

all:	$(DEP)

%.class:	%.java
	$(CC) $<

Test%.class:	Test%.java
	$(CC) -cp junit-4.13.jar:hamcrest-core-2.2.jar:. $<

test:	$(TEST:.java=.class)
	$(JVM) -jar junit-platform-console-standalone-1.6.2.jar -cp . $(addprefix -c , $(TEST:.java=))

cleantest:
	rm Test*.class

clean:
	rm *.class
