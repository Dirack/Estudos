# JOIN

```sql
SELECT
  produtos.*, fornecedores.nome AS fornecedor
  FROM produtos
  INNER JOIN fornecedores ON fornecedores.id = produtos.id_fornecedor;
 ```
 
 - LEFT JOIN - Todos da tabela da esquerda
 - RIGHT JOIN - Todos da tabela da direita
 - INNER JOINT - Todos que tem relação de correspondência entre as tabelas
