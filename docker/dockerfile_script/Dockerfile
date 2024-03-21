FROM ubuntu

WORKDIR /app
ADD . /app
RUN apt update && apt install gcc -y && gcc main.c -o main.x
ENTRYPOINT ./main.x
