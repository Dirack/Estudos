## Estudo sobre alocação dinâmica em C

> Este exercício utiliza as funções malloc, calloc e free.

1. Crie um programa em C que atribua um inteiro a um ponteiro de inteiros com um espaço de memória dado por malloc.
Atribua o valor 4 para o conteúdo deste ponteiro e depois libere o espaço de memória utilizando a função free().
Teste se a sua resposta está correta atribuindo os valores do conteúdo do ponteiro antes e depois da utilização
da função free. As globais utilizadas serão 'antes' (armazena o valor antes da utilização de free, deve ser igual a 4)
e 'depois' (armazena o valor depois da utilização de free, deve ser igual a zero).
