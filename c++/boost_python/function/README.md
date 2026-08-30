g++ -shared -fPIC \
>     $(python3-config --includes) \
>     teste.cpp \
>     -o example.so \
>     -lboost_python38 \
>     $(python3-config --ldflags)
