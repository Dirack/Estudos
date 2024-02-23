# Exemplo de criação de API em nodejs

## Para rodar este exemplo

Basta instalar os módulos do node:

```
npm install
```

E rodar o exemplo com:

```
npm run start-dev
```

## Para testar a API

Você pode utilizar o site https://resttesttest.com para testar as requisições a esta API. Esta API roda na porta 4000. Daí é só fazer a requisição para
'http://localhost'. As requisições a seguir não precisam de banco de dados:

- /ping - Responde com pong
- /random -  Responde com número aleatório
- /nome/:nome - Responde com um nome

## Tutorial de criação da API

Primeiro precisamos criar a estrutura básica do projeto. Começamos iniciando um projeto npm:

```
npm init
```

Depois fazemos a intalação dos módulos que iremos utilizar:

```
npm install dotenv express sequelize validator mysql2
```

Daí iniciamos o typescript no projeto (algumas configurações são necessárias, utilize o arquivo 'tsconfig.json' deste repositório como template):

```
tsc --init
```

E adicionamos os types que iremos utilizar:

```
npm install -D @types/node @types/express @types/sequelize @types/validator @types/mysql2
```
