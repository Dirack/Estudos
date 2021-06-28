#include<stdio.h>
#include<stdlib.h>
int main(){
    int i, j, k, n;
    float A[20][20], c, x[10], X[10], soma,a;
    printf("Escreva a ordem da matriz: ");
    scanf("%d", &n);
    printf("\nEscreva os elementos da matriz dos coeficientes: \n");
    for(i=0; i<n; i++) //Entrada dos coeficientes da matriz
    {
        for(j=0; j<n; j++)
        {
            printf("A[%d][%d] = ", i+1, j+1);
            scanf("%f", &A[i][j]);
        }
    }
    //Entrada do vetor independente
    printf("\nEscreva os elementos do vetor independente: \n"); 
    for(i=0; i<n; i++){
         printf("x[%d] = ", i+1);
         scanf("%f", &x[i]);
    }
    //Eliminação Gaussiana
    for(k=0; k<n-1; k++){
          for(i = k+1; i<n; i++){
                c = (-1)*(A[i][k]/A[k][k]);
                A[i][k] = 0;
                x[i] = x[i] + c*x[k];
                for (j = k+1; j<n; j++){
                    A[i][j] = A[i][j] + c*A[k][j];
                }
          }
    }
    printf("\n");
    //Coloquei pra printar a matriz dos coeficientes e o vetor escalonados, até aqui está correto
   for(i=0; i<n; i++){
        for(j=0; j<n; j++){
            printf("%6.2f\t", A[i][j]);
        }
        printf("\n");
    }
    printf("\n");
    for(i=0; i<n;i++)
        printf("%.2f\n", x[i]);
    printf("\n");
    X[n-1] = x[n-1]/A[n-1][n-1]; //Ultimo valor das incognitas esta correto
    //Substituição regressiva não sei onde esta o erro.
    for(i = n-2; i>=0; i--){
        soma = 0;
        for (j=i+1; j<n; j++){
            soma += A[i][j]*x[j];
        }
        X[i] =(x[i]-soma)/A[i][i];
    }
    for(i=0; i<n; i++){
         printf("x[%d] = %.2f\n", i+1, X[i]);
    }
    printf("\n\n");
    system("pause");
    return 0;
}

