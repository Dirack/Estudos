all:	dep main.class
	java main

main.class:	main.java
	javac main.java

dep:	utils.jar
	jar -tf utils.jar # Show jar file content
	jar -xf utils.jar # Extract jar file package

clean:
	rm -rf utils/ META-INF/ main.class
