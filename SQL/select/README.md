# SELECT

## SELECT com WHERE

A visão geral do comando SELECT com WHERE:

```sql
SELECT * FROM tabela WHERE condicao;
```

Para selecionar a coluna produto da tabela:

```sql
SELECT produto FROM tabela;
```

## Operadores AND e OR

Exemplos com condições e operadores AND e OR:

```sql
SELECT * from tabela WHERE preco=200 OR preco=140;

SELECT * from tabela WHERE preco=200 OR preco=140;

SELECT * from tabela WHERE preco=200 OR preco=140;
```

## WHERE LIKE

```sql
SELECT * from tabela WHERE nome LIKE 'B%';

SELECT * from tabela WHERE nome LIKE '%Lacerda%';
```

## WHERE BETWEEN

```sql
SELECT * from tabela WHERE estoque BETWEEN 5 AND 10;
```

## WHERE IN

Entre parênteses o IN recebe uma lista de valores para verificação. A
Querie retorna as linhas correspondentes que estão na lista. No Exemplo,
o id=1 e id=6.

```sql
SELECT * from tabela WHERE id IN (1,6);
```

## WHERE ORDER BY

```sql
SELECT * from tabela ORDER BY estoque ASC;

SELECT * from tabela ORDER BY estoque DESC;
```

## WHERE LIMIT

O primeiro parâmetro do LIMIT é quantos itens pular e o segundo é quantos itens exibir.
Esse comando deve vir sempre no final da query.

```sql
SELECT * from tabela WHERE preco=200 OR preco=140 LIMIT 4;

SELECT * from tabela WHERE preco=200 OR preco=140 LIMIT 3,3;
```
