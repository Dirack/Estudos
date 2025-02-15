# Exemplo de criação e orquestração de container com docker e docker compose - PHP e Mysql

Este é um estudo sobre criação e orquestração de container PHP e Mysql utilizando o docker e o docker compose.
Neste exemplo, utilizamos o docker compose para subir container PHP e Mysql e um container para rodar o PHPmyadmin
para que possamos criar a tabela do banco de dados. O exemplo completo neste tutorial:


[Tutorial container PHP+Mysql](https://share.atelie.software/subindo-um-banco-de-dados-mysql-e-phpmyadmin-com-docker-642be41f7638)

## Utilizando este exemplo

Este exemplo é executado com docker compose:

```
docker-compose up -d
```

O docker compose irá subir 3 containers. Um com a aplicação rodando PHP, outro com o banco de dados mysql
e o terceiro com o PHPmyadmin (para que você possa criar a tabela do banco de dados). Se você quiser, pode
importar a tabela já pronta importando o arquivo 'usuarios.sql' deste repositório.

E para destruir os containers basta utilizar:

```
docker compose down
```

Após subir os containers, você poderá acessar a página em 'http://localhost:8000' e o phpmyadmin em 'http://localhost:8100'.

Utilize os seguintes dados para fazer o login no phpmyadmin:

- Server: db
- Username: dirack
- Password: 12345

## Entrar no container do docker

Para acessar um dos containers gerados pelo docker compose,
basta utilizar:

```
docker exec -ti <containerID> bash
```