all:	example.so

example.so:	example.cpp
	g++ -shared -fPIC $(shell python3-config --includes) $< -o $@ -lboost_python38 $(shell python3-config --ldflags)
