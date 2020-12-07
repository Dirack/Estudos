#include <stdio.h>
#include <stdlib.h>
#include "matriz.h"

int main() {

    MatrizSimetrica* mat = cria(2);
    
    atribui(mat, 0, 0, 1);
    atribui(mat, 0, 1, 2);
    atribui(mat, 1, 1, 7);
 
    if (acessa(mat, 0, 1) == acessa(mat,1,0)) {
        printf("matriz simetrica.\n");
    } else {
        printf("matriz nao simetrica.\n");
    }
    
    libera(mat);
    return 0;
}
