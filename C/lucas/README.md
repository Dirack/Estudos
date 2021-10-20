# Dúvida de Lucas Costa da Cruz

Um determinado paciente permaneceu internado em um hospital em um período de tempo. Durante sua internação vários procedimentos foram efetuados. Para cada procedimento, as seguintes informações foram armazenadas no sistema: 

* Nome do procedimento; 
* Valor do procedimento; 
* Tempo de execução do procedimento (em dias);

```c
#include <stdio.h>
#include <stdlib.h>

float  pacienteinformação (float *V, int procedimentos) {
       int i;
       float soma_ procedimentos=0;

      for (i=0; i< procedimentos; i++) {
            soma_ procedimentos=soma_ procedimentos+V[i];
 }
return soma_ procedimentos/ procedimentos;
}
Void main () {
        Int i, n; 
        float *informação;

       printf (“Qual é o nome do paciente ? “);
       scanf (“%d”, &n);
informação = (float*)malloc (n*sizeof(float) );
if (informação==NULL) {
    printf (“Não foi possível alocar a área desejada\n”);
    exist (1);
}

printf (“*** Digitação dos dados da informação ***\n\n”);
for (i=0; i<n; i++) {
      printf (“Digite a informação do paciente %d: ”, i+1);
     scanf (“%f”, &informação [i]);
}

printf (“O paciente geral desta informação é:  % .2f\n\n ”, pacienteinformação (informação, n) );
free (informação);
}
```
