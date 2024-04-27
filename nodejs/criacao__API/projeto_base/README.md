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

A forma mais fácil de testar é importar a collection de requisições desta API no postman e utilizar.

Estas requisições estão no arquivo [Criação API - mod5 nodejs b7web.postman_collection.json](https://github.com/Dirack/Estudos/blob/master/nodejs/criacao__API/projeto_base/Cria%C3%A7%C3%A3o%20API%20-%20mod5%20nodejs%20b7web.postman_collection.json) e este arquivo pode ser importado diretamente no postman.

O ideal é utilizar o postman para estas requisições. Para instalar o postman no Ubuntu 20.04:

```
sudo snap install postman
```

A seguir, as opções de requisição.

Esta API roda na porta 4000. Daí é só fazer a requisição para
'http://localhost:4000'. As requisições GET a seguir não precisam de banco de dados:

- /ping - Responde com pong
- /random -  Responde com número aleatório
- /nome/:nome - Responde com um nome

Para os exemplos que utilizam o banco de dados, você irá precisar importar o banco de dados 'Estudos.sql' que está presente neste repositório no seu PhpMyAdmin.
A senha de conexão e demais informações estão presentes no arquivo '.env' deste repositório, você terá de editar o arquivo para inserir as suas credenciais.
A seguir as requisições POST:

- /umafrase/aleatoria - Retorna uma frase aleatória do banco
- /umafrase/:id - Retorna uma frase específica

Os exemplos que utilizam verbos diferentes do GET são um pouco mais complexos.

- /frases - Enviar como requisição POST e no body da requisição enviar como tipo urlencoded a chave autor com o valor 'NomeDoAutor' e a chave txt com o valor 'frase qualquer'
- /atualizar/:id - Enviar como requisição PUT e no body da requisição enviar como tipo urlencoded a chave autor com o valor 'NomeDoAutor' e a chave txt com o valor 'frase qualquer'
- /deletar/:id - Enviar requisição DELETE com o id da frase que se pretende deletar na URL

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
