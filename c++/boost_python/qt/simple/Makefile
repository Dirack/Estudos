all: example.so

example.so: example.cpp
	g++ -shared -fPIC \
		$(shell python3-config --includes) \
		$(shell pkg-config --cflags Qt5Widgets Qt5WebEngineWidgets) \
		$< -o $@ \
		-lboost_python38 \
		$(shell python3-config --ldflags) \
		$(shell pkg-config --libs Qt5Widgets Qt5WebEngineWidgets)