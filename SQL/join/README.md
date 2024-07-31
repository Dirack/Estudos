# JOIN

```sql
SELECT
  produtos.*, fornecedores.nome AS fornecedor
  FROM produtos
  INNER JOIN fornecedores ON fornecedores.id = produtos.id_fornecedor;
 ```
 
 - LEFT JOIN - Lista todos os items da tabela da esquerda, independente da correspondência estabelecida no ON
 - RIGHT JOIN - Lista todos os items da tabela da direita, independente da correspondência estabelecida no ON
 - INNER JOIN - Lista todos os items que tem a relação de correspondência entre as tabelas estabelecida no ON

- SELF JOIN
```sql
create table aself(
id int auto_increment primary key,
name varchar(100),
manager_id int);

insert into aself (name) values ('sam');

insert into aself (name,manager_id) values ('alex',1),('john',1),('shopia',2),('emma',2);

select a.name as employee, b.name as manager from aself a, aself b where a.manager_id = b.id;
```

This query will return the name of each employee along with the name of their respective manager.
