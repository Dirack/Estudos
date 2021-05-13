## Alocação dinâmica

Neste estudo iremos aprender sobre alocação dinâmica em C. Quando iniciada a execução, o espaço de endereços de um processo
em execução é dividido em várias segmentos lógicos. Os mais importantes são:

* **Text:** contém o código do programa e suas constantes. Este segmento é alocado durante a criação do processo (''exec'') e permanece do mesmo tamanho durante toda a vida do processo.

* **Data:** este segmento é a memória de trabalho do processo, aonde ficam alocadas as variáveis globais e estáticas. Tem tamanho fixo ao longo da execução do processo.

* **Stack:** contém a pilha de execução, onde são armazenadas os parâmetros, endereços de retorno e variáveis locais de funções. Pode variar de tamanho durante a execução do processo.

* **Heap:** contém blocos de memória alocadas dinamicamente, a pedido do processo, durante sua execução. Varia de tamanho durante a vida do processo.

<img src="https://github.com/Dirack/Estudos/blob/master/C/alloc/areas-memoria.png" width=800>

Um programa em C suporta três tipos de alocação de memória:

* **A alocação estática** ocorre quando são declaradas variáveis globais ou estáticas; geralmente alocadas em Data. A alocação estática ocorre com variáveis globais (alocadas fora de funções) ou quando variáveis locais (internas a uma função) são alocadas usando o modificador ''static''. Uma variável alocada estaticamente mantém seu valor durante toda a vida do programa, exceto quando explicitamente modificada.

* **A alocação automática** ocorre quando são declaradas variáveis locais e parâmetros de funções. O espaço para a alocação dessas variáveis é reservado quando a função é invocada, e liberado quando a função termina. Geralmente é usada a pilha (stack). Por default, as variáveis definidas dentro de uma função (variáveis
locais e parâmetros) são alocadas de forma automática na pilha de execução do programa (stack) a cada chamada da função, sendo descartadas quando a função encerra.

  * Estouro da pilha (_stack overflow_): A pilha de execução do programa normalmente é pequena (8 MB ou menos). Por isso, a tentativa de alocar
  variáveis locais muito grandes pode resultar em erro de compilação ou de execução (SIGSEGV - Segmentation Fault).
  Para tais situações devem ser usadas variáveis globais (estáticas) ou variáveis dinâmicas. Se a função for chamada recursivamente, as variáveis locais
  e parâmetros serão novamente alocados na pilha, em áreas distintas para cada nível de recursão.
  Isso permite preservar os valores anteriores dos mesmos no retorno dos níveis de recursão.

* **A alocação dinâmica**, quando o processo requisita explicitamente um bloco de memória para armazenar dados; o controle das áreas alocadas dinamicamente é manual ou semi-automático: o programador é responsável por liberar as áreas alocadas dinamicamente. A alocação dinâmica geralmente usa a área de heap.
Na alocação dinâmica, o programa solicita explicitamente áreas de memória ao sistema operacional, as utiliza e depois as libera quando
não forem mais necessárias, ou quando o programa encerrar. As requisições de memória dinâmica são geralmente alocadas na área de memória denominada heap.

Por default, o compilador gcc gera código que pode alocar memória até 4GB, mesmo em máquinas de 64 bits com mais memória disponível.
Para gerar código executável com capacidade para alocar memória dinamicamente além desse limite,
devem ser usados flags de compilação específicos, como ''-mcmodel=medium'' ou ''-mcmodel=large''.

## Alocação dinâmica na prática

Para fazer a alocação dinâmica, utilizamos a chamada à função malloc:

```c
#include <stdlib.h>
struct mystruct *ptr;
...
ptr = malloc( sizeof(struct mystruct) );
if (ptr == 0) abort();       // caso a alocação não tenha ocorrido
```

O protótipo da função malloc mostra que o retorno da função é um ponteiro genérico void, portanto é necessário fazer o casting após a alocação:

```c
// Protótipo da função malloc
void * malloc (size_t size)
```

## Alocação com calloc

A função ''calloc()'' aloca um bloco de memória de tamanho suficiente para conter um vetor com ''count'' 
elementos de tamanho ''eltSize'' cada um. O conteúdo do bloco alocado é preenchido por zeros.

```c
#include <stdlib.h>
void * calloc (size_t count, size_t eltSize)
```

Exemplo:

```
float *v ;
int i ;

v = calloc( 1000, sizeof(float) ) ;  // aloca 1.000 floats

for (i=0; i < 1000; i++)             // inicializa o vetor
   v[i] = 1.0 / (i + 1) ;
```

## Liberando a memória com free

A chamada ''free'' deve ser invocada para liberar uma área de memória previamente alocada dinamicamente:

```c
#include <stdlib.h>
void free (void *ptr)
```

Esta função libera um bloco de memória previamente alocado, apontado por ''ptr''. Atenção: o ponteiro ''ptr''
continua apontando para o bloco liberado e por isso é aconselhável mudar seu valor para ''NULL'' após a liberação:

```c
ptr = malloc (1024) ;
...
free (ptr) ;
ptr = NULL ;                 // não é obrigatório, mas aconselhável
```

A memória alocada por um programa é automaticamente liberada quando sua execução encerra.
Por isso, o uso da chamada ''free()'' não é obrigatório no final do programa.
Contudo, é recomendado utilizá-lo sempre, para desenvolver o hábito salutar de sempre liberar um bloco alocado.


### Fontes

* https://www.inf.ufpr.br/roberto/ci067/10_aloc.html
