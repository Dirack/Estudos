# Exemplo de cálculo dos coeficientes do spline cúbico natural

> Este exemplo foi retirado da página 217 do livro Algoritmos numéricos: Uma
> abordagem moderna de cálculo numérico.

* Exemplo 3.38: Dados os pontos (1,2) (2,4), (4,1), (6,3) e (7,3), interpolar os seis valores z={1.2,0.1,2.9,5.2,1.3 e 6.7} usando splines cúbicos naturais.

##### Este exemplo resolve apenas a parte do cálculo dos coeficientes, restando a parte da interpolação dos pontos z

spline   | a_i | b_i | c_i | d_i |
--- | --- | --- | --- | --- |
s_0 | -0.78333 | 0.00000 | 2.78333 | 2.00000 |
s_1 | 0.69167 | -2.35000 | 0.43333 | 4.00000 |
s_2 | -0.48333 | 1.80000 | -0.66667 | 1.00000 |
s_3 | 0.36667 | -1.10000 | 0.73333 | 3.00000 |
