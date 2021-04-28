#include <stdio.h>
#include <stdlib.h>

int* realoca(int* ptr, int* size)
{
 int count,
  add;
 
 printf("Deseja adicionar quantos numeros: ");
 scanf("%d", &add);
 
 ptr = (int *) realloc(ptr, (*size + add)*sizeof(int) );
 if(ptr)
 {
  
  for(count=0 ; count < add ; count++)
  {
   printf("Numero [%d]: ", count+1);
   scanf("%d", &ptr[*size + count]);
  }
 
  *size += add;
 }
 else
 {
  printf("Espaço em memória insuficiente\n");
  free(ptr);
  exit(1);
 }
 return ptr;
}

void exibe(int* ptr, int size)
{
 int count;
 for(count=0 ; count<size ; count++)
  printf("%3d", ptr[count]);
  
}

int menu()
{
 int opcao;
 
 printf("\nO que deseja: \n");
 printf("0. Sair\n");
 printf("1. Adicionar numeros\n");
 printf("2. Exibir lista de numeros\n");
 printf("Opcao: ");
 scanf("%d", &opcao);
 
 return opcao;
}

int main(void)
{
 int opcao,
  size=0,
  *ptr=NULL;
 
 do
 {
  switch(menu())
  {
   case 0:
     opcao=0;
     break;
     
   case 1:
     ptr=realoca(ptr, &size);
     break;
   
   case 2:
     exibe(ptr, size);
     break;
   
   default:
     printf("Opcao invalida!\n");
     
  }
 }while(opcao);
 
 free(ptr);
 
 return 0;
}


