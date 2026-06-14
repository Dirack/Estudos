# Estudos sobre SQL

[:arrow_up: Voltar a home](https://github.com/Dirack/Estudos/tree/master#estudos)

## Índice

- [SELECT](https://github.com/Dirack/Estudos/tree/master/SQL/select#select)
- [IN](https://github.com/Dirack/Estudos/tree/master/SQL/select#where-order-by)
- [ORDER BY](https://github.com/Dirack/Estudos/tree/master/SQL/select#where-order-by)
- [LIMIT](https://github.com/Dirack/Estudos/tree/master/SQL/select#where-limit)
- [COUNT, AVERAGE e SUM](https://github.com/Dirack/Estudos/tree/master/SQL/count_avg_sum#count-avg-e-sum)
- [GROUP BY](https://github.com/Dirack/Estudos/tree/master/SQL/group_by#group-by)
- [Subquery](https://github.com/Dirack/Estudos/tree/master/SQL/subquery#subquery)
- [JOIN](https://github.com/Dirack/Estudos/tree/master/SQL/join#join)
- [INSERT INTO](https://github.com/Dirack/Estudos/tree/master/SQL/insert_into#insert-into)
- [UPDATE](https://github.com/Dirack/Estudos/tree/master/SQL/update#update)
- [DELETE](https://github.com/Dirack/Estudos/tree/master/SQL/delete#delete)
- [VIEWS](https://github.com/Dirack/Estudos/tree/master/SQL/view#view)
- [TRANSACTIONS](https://github.com/Dirack/Estudos/tree/master/SQL/transactions#transactions)

## Mini-projetos

- [Exemplo de uso: Organizador](https://github.com/Dirack/Estudos/tree/master/SQL/Organizador#organizador) - Exemplo de implementação de interface web com conexão a banco de dados MySQL e PHP para o gerenciamento de repertório musical
- [Exemplo de uso: Estante de livros](https://github.com/Dirack/Estudos/tree/master/SQL/Estante-de-livros#estante-de-livros) - Exemplo de implementação de interface web com conexão a banco de dados MySQL e PHP para o gerenciamento de estudos e repertório musical


## O que é um Banco de Dados?

Um banco de dados é uma coleção organizada de informações - ou dados - estruturadas, normalmente armazenadas eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados (DBMS). Juntos, os dados e o DBMS, juntamente com os aplicativos associados a eles, são chamados de sistema de banco de dados, geralmente abreviados para apenas banco de dados.

Os dados nos tipos mais comuns de bancos de dados em operação atualmente são modelados em linhas e colunas em uma série de tabelas para tornar o processamento e a consulta de dados eficientes. Os dados podem ser facilmente acessados, gerenciados, modificados, atualizados, controlados e organizados. A maioria dos bancos de dados usa a linguagem de consulta estruturada (SQL) para escrever e consultar dados.


## O que é SQL (Structured Query Language, Linguagem de consulta estruturada)?

SQL é uma linguagem de programação usada por quase todos os bancos de dados relacionais para consultar, manipular e definir dados e fornecer controle de acesso. O SQL foi desenvolvido pela primeira vez na IBM nos anos 1970, com a Oracle como principal contribuinte, o que levou à implementação do padrão SQL ANSI; o SQL estimulou muitas extensões de empresas como IBM, Oracle e Microsoft. Embora o SQL ainda seja amplamente usado hoje em dia, novas linguagens de programação estão começando a aparecer.

[Leia mais sobre bancos de dados SQL...](https://www.oracle.com/br/database/what-is-database/#:~:text=Um%20banco%20de%20dados%20%C3%A9,banco%20de%20dados%20(DBMS).)

## Relational Databases

Relational databases organize data into tables, where each table represents a specific type of entity (like customers or products). These tables are linked together based on relationships between the data, often using shared columns called keys. This structure allows for efficient storage, retrieval, and management of large datasets while ensuring data integrity and consistency.

## RDBMS Benefits and Limitations

Relational Database Management Systems (RDBMS) organize data into tables with rows and columns, establishing relationships between these tables using keys. This structured approach offers benefits like data integrity through constraints and ACID properties (Atomicity, Consistency, Isolation, Durability), ensuring reliable transactions. However, RDBMS can face limitations regarding scalability, especially with massive datasets, and may not be the optimal choice for handling unstructured or semi-structured data due to their rigid schema.

## SQL vs NoSQL

SQL (relational) and NoSQL (non-relational) databases represent two different approaches to data storage and retrieval. SQL databases use structured schemas and tables, emphasizing data integrity and complex queries through joins. NoSQL databases offer more flexibility in data structures, often sacrificing some consistency for scalability and performance. The choice between SQL and NoSQL depends on factors like data structure, scalability needs, consistency requirements, and the nature of the application.

