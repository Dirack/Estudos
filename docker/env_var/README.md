# Exemplo de uso de variáveis de ambiente no docker


Para criar a imagem deste exemplo:

```
docker build -t teste:1.0.0 .
```

Para rodar este exemplo utilize:

```
docker run -e NOME=TESTE teste:1.0.0
```
