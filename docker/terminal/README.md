# Container docker para rodar shell script

> Este é um exemplo de uso de container docker para rodar scripts do shell
> E um estudo sobre interação do docker no terminal

## Como fazer o build da imagem deste exemplo

Este repositório possui um Dockerfile que você pode utilizar para criar a imagem
docker do estudo. Basta rodar o comando a seguir.

```
docker build -t terminal:1.0.0 .
```

## Interatividade de terminal no docker

Por padrão o docker não tem interatividade com o host. Então, ao rodar
o comando a seguir o container irá rodar sem exibir o prompt da aplicação.

```
docker run terminal:1.0.0
```

Para adicionar interatividade utilize a opção '-i'.

```
docker run -i terminal:1.0.0
```

Porém, na execução acima o prompt não será exibido no terminal. Para fazer o
attach no terminal do container utilize a opção '-t'.

```
docker run -ti terminal:1.0.0
```