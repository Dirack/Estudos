# Redes no Docker

O Docker cria três redes automaticamente: __bridge, none e host__. A rede bridge é a rede padrão à qual os contêineres se conectam, permitindo comunicação interna entre eles.
Para acessar contêineres externamente, é necessário mapear as portas dos contêineres para as portas do host Docker ou usar a rede host, que remove a isolação de rede.

## Isolamento de Contêineres

O Docker permite criar redes internas personalizadas para isolar contêineres, utilizando o comando docker network create e especificando o driver e a sub-rede.
Para visualizar as configurações de rede de um contêiner existente, utiliza-se o comando docker inspect, que fornece informações sobre o endereço IP e outros detalhes.

## Resolução de Nomes de Contêiner

Os contêineres podem se comunicar usando seus nomes, graças a um servidor DNS interno do Docker, que facilita a resolução de nomes entre contêineres.
O Docker utiliza namespaces de rede e pares de Ethernet virtuais para isolar e conectar contêineres, garantindo que cada contêiner tenha seu próprio espaço de rede.

## Exercícios

```
    1  docker network ls
    2  docker inspect alpine-1
    3  docker inspect bridge
    4  docker run --name alpine-2 --network=none alpine
    5  docker inspect alpine-2
    6  docker network create --driver bridge --subnet 182.18.0.0/24 --gateway 182.18.0.1 wp-mysql-network
    7  docker inspect wp-mysql-network
    8  docker run --name mysql-db -e MYSQL_ROOT_PASSWORD=db_pass123 --network wp-mysql-network mysql:5.7
    9  docker ps
   10* docker run --name webapp -e DB_Host=mysql-db DB_Password=db_pass123 --network wp-mysql-network --link myql-db:mysql-db kodekloud/simple-webapp-mysql
   11* docker run --name webapp -e DB_Host=mysql-db -e DB_Password=db_pass123 --network wp-mysql-network --link myql-db:mysql-db kodekloud/simple-webapp-mysql
   12* docker run --name webapp -e DB_Host=mysql-db -e DB_Password=db_pass123 --network wp-mysql-network --link myql-db:mysql-db -p 38080:8080 kodekloud/simple-webapp-mysql
   13* docker ps
   14* docker run --name webapp -e DB_Host=mysql-db -e DB_Password=db_pass123 --network wp-mysql-network --link myql-db:mysql-db -p 38080:8080 kodekloud/simple-webapp-mysql
   15* docker ps -a
   16* docker rm webapp
   17* docker run --name webapp -e DB_Host=mysql-db -e DB_Password=db_pass123 --network wp-mysql-network --link myql-db:mysql-db -p 38080:8080 kodekloud/simple-webapp-mysql
```
