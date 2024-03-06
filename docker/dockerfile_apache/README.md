# Exemplo de construção de imagem do apache com Dockerfile

Para construir essa imagem utilizando o Dockerfile, basta utilizar:

```
docker image build -t meu_apache:1.0.0 .
```

Para construir um container a partir da imagem e fazer o bind da porta 80 do container na porta 8000:

```
docker container run -d -p 8000:80 meu_apache:1.0.0
```

Para testar, basta mandar uma requisição GET utilizando curl:

```
curl localhost:8000
```

Para entrar no container:

```
docker container exec -ti <containerID> bash
```
