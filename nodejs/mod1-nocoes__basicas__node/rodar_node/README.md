# Rodar o node em modo watch e consumir variáveis de ambiente

Para rodar o node em modo watch, ler typescript e consumir as variáveis de ambiente de um arquivo .env:

```
node --env-file=.env --import=tsx --watch ./index.ts
```

Este comando pode ser incluído como script no arquivo 'package.json'. Você pode precisar instalar as dependências do node:

```
npm install tsx; npm install -D  @types/node
```
