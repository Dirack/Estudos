# Exemplo de criação de volume do tipo bind em docker

Para gerar um volume no container montado na pasta estudo no diretório deste exemplo
utilize:

```
docker container run -ti --mount type=bind,src=./estudo,dst=/estudo debian
```

Com o comando acima, o volume './estudo' será montado em '/estudo' dentro do container