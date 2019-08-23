# Exemplo de inner join

```sql
SELECT a.nome "A.NOME",
b.valor "B.VALOR" FROM tabela_A a
INNER JOIN tabela_B b ON b.codigo = a.codigo;
```
