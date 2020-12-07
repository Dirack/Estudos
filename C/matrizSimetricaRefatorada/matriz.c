#include "matriz.h"

MatrizSimetrica* criaMatrizSimetrica (int numeroLinhasColunas) {

	int numeroElementosMatrizSimetrica = numeroLinhasColunas*(numeroLinhasColunas+1)/2;

	MatrizSimetrica* matriz = (MatrizSimetrica*) malloc(sizeof(MatrizSimetrica));
	matriz->dimensao = numeroLinhasColunas;
	matriz->vetor = (float*) malloc(numeroElementosMatrizSimetrica*sizeof(float));
	return matriz;
}
 
void libera (MatrizSimetrica* matriz) {
	free(matriz->vetor);
	free(matriz);
}
 
static void encerraProgramalinhaColunaSaoInvalidas(int linha, int coluna, int dimensao){
/*< Verificar se linha e coluna passadas estão dentro da matriz simétrica >*/

	if (linha<0 || linha>=dimensao || coluna<0 || coluna>=dimensao) {
		printf("Atribuição inválida na matriz simétrica. Na linha=%d coluna=%d\n",linha,coluna);
		exit(1);
	}

}

static int indiceVetorElementosMatrizSimetrica(int linha, int coluna){
/*< Retorna o índice do vetor de elementos da matriz simétrica dados linha e coluna >*/

	int indice;

    	if (linha>=coluna){
       		indice = linha*(linha+1)/2 + coluna;
	}else{
        	indice = coluna*(coluna+1)/2 + linha;
	}

	return indice;
}

float acessa (MatrizSimetrica* matriz, int linha, int coluna) {
	
	int indice;

	encerraProgramalinhaColunaSaoInvalidas(linha,coluna,matriz->dimensao);

	indice = indiceVetorElementosMatrizSimetrica(linha,coluna);

	return matriz->vetor[indice];
}

 
void atribui (MatrizSimetrica* matriz, int linha, int coluna, float f) {
    
	int indice;

	encerraProgramalinhaColunaSaoInvalidas(linha,coluna,matriz->dimensao);

	indice = indiceVetorElementosMatrizSimetrica(linha,coluna);

	matriz->vetor[indice]=f;

}
