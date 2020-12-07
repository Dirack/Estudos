#include <stdio.h>
#include <stdlib.h>

#ifndef _MATRIZ_H_
#define _MATRIZ_H_

/* Matriz simétrica, armazena os elementos da matriz em um vetor */
struct matriz {
    int dimensao;
    float* vetor;
};
 
typedef struct matriz MatrizSimetrica;
 
MatrizSimetrica* criaMatrizSimetrica(int numeroElementosMatrizSimetrica);

void libera (MatrizSimetrica* matriz);
 
float acessa (MatrizSimetrica* matriz, int linha, int coluna);
 
void atribui (MatrizSimetrica* matriz, int linha, int coluna, float f);
 
#endif    
