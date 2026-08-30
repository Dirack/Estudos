CXX = g++

CXXFLAGS = -shared -fPIC \
           $(shell python3-config --includes) \
           $(shell pkg-config --cflags Qt5Widgets Qt5WebEngineWidgets)

LDFLAGS = -lboost_python38 \
          $(shell python3-config --ldflags) \
          $(shell pkg-config --libs Qt5Widgets Qt5WebEngineWidgets)

TARGET = example.so
SOURCE = example.cpp

all: $(TARGET)

$(TARGET): $(SOURCE)
	$(CXX) $(CXXFLAGS) $< -o $@ $(LDFLAGS)

clean:
	rm -f $(TARGET)