# COUNT, AVG e SUM

```sql
SELECT COUNT(*) AS contagem FROM produtos WHERE preco < 100;

SELECT AVG(preco) AS media FROM produtos WHERE preco < 100;

SELECT
  AVG(preco) AS media,
  COUNT(*) AS total,
  SUM(estoque) AS soma
FROM produtos;
```
