# Exemplo de dockerfile para compilar e rodar programa em c no linux ubuntu

Para gerar a imagem de estudo com o dockerfile presente neste repositório, basta utilizar:

```
docker image build -t estudo:1.0 .
```

Daí basta rodar o container utilizando a imagem:

```
docker run -ti estudo:1.0
```
