# SUBQUERY

```sql
SELECT *,
  (SELECT fornecedores.nome FROM fornecedores WHERE fornecedores.id=produtos.id_fornecedor)
  AS nome_fornecedor
  FROM produtos;
```
