# Exemplo utilização de volumes data only docker

Primeiro, crie um volume 'dbdados':

```
docker volume create dbdados
```

Agora criamos o primeiro container:

```
docker container run -d -p 5432:5432 --name psql1 --mount type=volume,src=dbdados,dst=/data -e POSTGRESQL_USER=docker POSTGRESQL_PASS=docker POSTGRESQL_DB=docker kamui/postgresql
```

E em seguida criamos o segundo container:

```
docker container run -d -p 5433:5432 --name psql2 --mount type=volume,src=dbdados,dst=/data -e POSTGRESQL_USER=docker POSTGRESQL_PASS=docker POSTGRESQL_DB=docker kamui/postgresql
```
