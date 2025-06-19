# Exemplo utilização de volumes data only docker

## Objetivo do exemplo

    - Mostrar que vários containers podem compartilhar os mesmos dados usando um volume Docker.

    - Isso evita o uso de containers "data-only", que eram usados antigamente apenas para armazenar volumes.

    - Com o volume dbdados, se um dos containers for deletado, os dados continuam salvos no volume e podem ser reutilizados.

A utilização de container data-only é uma forma antiga para a persistência de dados. A forma atual é utilizar volumes, como no exemplo a seguir.

[Leia mais sobre data-only](https://medium.com/@rasheedamir/docker-good-bye-data-only-container-pattern-a28f90493a5a)

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
