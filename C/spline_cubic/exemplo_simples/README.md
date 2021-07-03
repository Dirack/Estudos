# Exemplo de cálculo das segundas derivadas e dos coeficientes do spline cúbico natural

> Este exemplo foi retirado da página 207 e 202 do livro Algoritmos numéricos: Uma
> abordagem moderna de cálculo numérico.

* Exemplo 3.33: Resolver o exemplo 3.30 utilizando um programa baseado no algoritmo da Figura 3.10 (Algoritmo splines cúbicos naturais).

* Exemplo 3.30: Dados os pontos (1,2) (2,4), (4,1), (6,3) e (7,3), calcular as derivadas segundas dos splines cúbicos naturais.

A saída esperada deste programa de exemplo são as segundas derivadas dos splines e os coeficientes logo a seguir, dados nas tabelas abaixo:

   | Derivadas |
--- | --- |
s_0 | 0.00000 |
s_1 | -4.70000 |
s_2 | 3.60000 |
s_3 | -2.20000 |
s_4 | 0.00000 |

spline   | a_i | b_i | c_i | d_i |
--- | --- | --- | --- | --- |
s_0 | -0.78333 | 0.00000 | 2.78333 | 2.00000 |
s_1 | 0.69167 | -2.35000 | 0.43333 | 4.00000 |
s_2 | -0.48333 | 1.80000 | -0.66667 | 1.00000 |
s_3 | 0.36667 | -1.10000 | 0.73333 | 3.00000 |
