# Exemplo criação de dockerfile simples

Este é um dockerfile simples para rodar o programa stress no debian.
Para fazer o build da imagem use:

```
docker image build -t toskeira:1.0 .
```

Para rodar o container:

```
docker container run -d -m 128M toskeira:1.0
```

Para checkar o container rodando:

```
docker container stats <containerID>
```