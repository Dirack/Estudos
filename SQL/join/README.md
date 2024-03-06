# JOIN

```sql
SELECT
  produtos.*, fornecedores.nome AS fornecedor
  FROM produtos
  INNER JOIN fornecedores ON fornecedores.id = produtos.id_fornecedor;
 ```
 
 - LEFT JOIN - Lista todos os items da tabela da esquerda, independente da correspondência estabelecida no ON
 - RIGHT JOIN - Lista todos os items da tabela da direita, independente da correspondência estabelecida no ON
 - INNER JOINT - Lista todos os items que tem a relação de correspondência entre as tabelas estabelecida no ON
