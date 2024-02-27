# Exemplo de criação de volume do tipo volume em docker

Para gerar um volume chamado estudo:

```
docker volume create estudo
```

Daí basta listar todos os volumes com:

```
docker volume ls
```

Podemos inspecionar o volume criado com:

```
docker volume inspect estudo
```

Estes volumes criados ficam armazenados em '/var/lib/docker/volumes'. Eles tem um diretório '_data'.

Para montar o volume no container:

```
docker container run -ti --mount type=volume,src=estudo,dst=/estudo debian
```

Para remover o volume criado basta utilizar:

```
docker volume rm estudo
```