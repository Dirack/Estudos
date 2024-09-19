# Receber dados de requisição no express

Este exemplo é uma API que faz o console log dos dados de requisição recebidos.

Para testar esta API com curl:

```
curl -i 'http://localhost:3000/variavel?parametro=oi&outro=mais' -d 'corpo=fala mano' -X POST
```