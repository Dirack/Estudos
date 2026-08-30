sudo apt install \
    qtbase5-dev \
    qtbase5-dev-tools \
    qt5-qmake \
    qtwebengine5-dev


make clean
qmake
make
./qt-cesium-poc

2. Crie o .pro
nano qt-cesium-poc.pro

Coloque:

QT += widgets webenginewidgets

SOURCES += main.cpp
3. Gere o Makefile
qmake qt-cesium-poc.pro

Você deve ver algo parecido com:

Info: creating stash file ...

e aparecerá um:

Makefile

Confira:

ls

Deve ter:

main.cpp
qt-cesium-poc.pro
Makefile
4. Compile
make

Se tudo estiver certo, será criado um executável:

qt-cesium-poc
5. Execute
./qt-cesium-poc

Deve aparecer:

┌──────────────────────────────────┐
│        Qt Web Viewer             │
├──────────────────────────────────┤
│                                  │
│          Google                  │
│                                  │
│                                  │
└──────────────────────────────────┘