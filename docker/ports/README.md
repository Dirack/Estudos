# Container docker de aplicação flask e bind de portas

> Estudo sobre como fazer o bind de portas e containerizar uma aplicação python flask

Esta é uma aplicação flask simples que cria uma página de Hello World.
Para construir a imagem docker deste exemplo utilizando Dockerfile:

```
docker build -t ports:1.0.0 .
```

Daí basta rodar um container utilizando a imagem criada.

```
docker run -d -p 8000:5000 ports:1.0.0
```

O comando acima roda o container como daemon (opção '-d') e faz o bind
da porta 8000 do host para a porta 5000 do container (opção '-p').

Você pode utilizar a curl para testar se o container está funcionando:

```
curl localhost:8000
```

Ou acessar no navegador o endereço 'http://localhost:8000'.

Em ambos os casos uma mensagem 'Hello World' deverá aparecer.