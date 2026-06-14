# View

Uma View é uma consulta SQL armazenada no banco que se comporta como uma tabela virtual.

Em vez de executar sempre um SELECT complexo, você cria uma view uma vez e depois consulta essa view como se fosse uma tabela.

> Uma View é uma tabela virtual baseada em uma consulta SQL armazenada. Ela simplifica consultas, aumenta a reutilização e pode ser utilizada para controle de acesso aos dados

Exemplo

Suponha duas tabelas:

CREATE TABLE clientes (
    id INTEGER,
    nome VARCHAR(100)
);

CREATE TABLE pedidos (
    id INTEGER,
    cliente_id INTEGER,
    valor DECIMAL(10,2)
);

Você faz frequentemente este join:

SELECT
    c.nome,
    p.valor
FROM clientes c
JOIN pedidos p
    ON c.id = p.cliente_id;

Pode transformá-lo em uma view:

CREATE VIEW vw_pedidos_clientes AS
SELECT
    c.nome,
    p.valor
FROM clientes c
JOIN pedidos p
    ON c.id = p.cliente_id;

Agora basta consultar:

SELECT *
FROM vw_pedidos_clientes;

Vantagens
1. Simplificação

Consultas complexas ficam mais fáceis de reutilizar.

Antes:

SELECT ...
FROM tabela1
JOIN tabela2
JOIN tabela3
...

Depois:

SELECT *
FROM minha_view;
2. Segurança

Você pode permitir acesso apenas à view, escondendo colunas sensíveis.

Exemplo:

Tabela:

clientes
---------
id
nome
cpf
salario

View:

CREATE VIEW vw_clientes_publico AS
SELECT
    id,
    nome
FROM clientes;

Usuários acessam a view sem enxergar CPF ou salário.

3. Reutilização

Várias aplicações podem utilizar a mesma lógica.

Se a regra mudar, você altera apenas a view.

Como alterar uma View

Em muitos bancos:

CREATE OR REPLACE VIEW vw_pedidos_clientes AS
SELECT
    c.nome,
    p.valor,
    p.id
FROM clientes c
JOIN pedidos p
    ON c.id = p.cliente_id;
Como remover
DROP VIEW vw_pedidos_clientes;