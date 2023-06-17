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

## WHERE BETWEEN

## WHERE IN

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
