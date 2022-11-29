all:	com GreetReader.class
	java GreetReader

GreetReader.class:	Greeting.class GreetReader.java
	javac GreetReader.java

com:	protobuf.jar
	jar -xf protobuf.jar # Extract jar content

Greeting.class:	protobuf.jar Greeting.java
	javac -nowarn Greeting.java -cp protobuf.jar

Greeting.java:	greeting.proto # Generate java file from protobuf
	protoc --java_out=. greeting.proto

clean:
	rm -rf com META-INF *.class Greeting.java
