Se você quer apenas um overview rápido para seguir o roadmap, pense no Pandas como uma biblioteca para trabalhar com tabelas em memória, parecidas com planilhas Excel ou tabelas SQL.

Conceitos principais
DataFrame

É a estrutura mais importante.

Imagine uma tabela:

nome	idade
Ana	20
João	30

Em Pandas:

import pandas as pd

df = pd.DataFrame({
    "nome": ["Ana", "João"],
    "idade": [20, 30]
})

df é um DataFrame.

Ler arquivos
CSV
df = pd.read_csv("usuarios.csv")
Excel
df = pd.read_excel("usuarios.xlsx")
Visualizar dados

Primeiras linhas:

df.head()

Últimas linhas:

df.tail()

Informações gerais:

df.info()

Estatísticas:

df.describe()
Selecionar colunas
df["nome"]

Múltiplas colunas:

df[["nome", "idade"]]
Filtrar linhas

Usuários maiores de idade:

df[df["idade"] >= 18]

Exemplo:

adultos = df[df["idade"] >= 18]

Isso é parecido com:

SELECT *
FROM usuarios
WHERE idade >= 18;
Criar colunas
df["idade_dobrada"] = df["idade"] * 2
Agregações

Média:

df["idade"].mean()

Soma:

df["idade"].sum()

Máximo:

df["idade"].max()

Mínimo:

df["idade"].min()
Ordenação
df.sort_values("idade")

Descrescente:

df.sort_values("idade", ascending=False)
Agrupamentos

Muito parecido com SQL GROUP BY.

df.groupby("cidade")["salario"].mean()

Equivalente a:

SELECT cidade,
       AVG(salario)
FROM funcionarios
GROUP BY cidade;
Salvar arquivo

CSV:

df.to_csv("resultado.csv")

Excel:

df.to_excel("resultado.xlsx")
O que normalmente se faz com Pandas?
Ler CSV/Excel
Filtrar dados
Fazer cálculos
Agrupar informações
Gerar relatórios
Preparar dados para Machine Learning
Tradução mental para quem conhece SQL
SQL	Pandas
SELECT	Escolher colunas
WHERE	Filtros
GROUP BY	groupby()
ORDER BY	sort_values()
AVG	mean()
SUM	sum()
COUNT	count()
JOIN	merge()

Se você entender bem:

DataFrame
read_csv()
head()
filtros
groupby()
sort_values()

já consegue acompanhar boa parte dos códigos de análise de dados e Machine Learning que aparecem no dia a dia.
