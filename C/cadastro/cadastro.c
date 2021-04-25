#include<stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct endereco endereco;
typedef struct cliente cliente;
 struct endereco {
    char rua[50];
    char cidade[50];
    char estado [40];
    int numero;
 };
 struct cliente {
    endereco ender;
    int id;
    char nome[50];
    int telefone;
 };
void ler_cliente(cliente p[3]  ,int n  )
 {
    for(int i =0 ; i<n;i++)
    {   printf("Digite a Id:");
        scanf("%d", &p[i].id);
        printf("Digite a nome:");
        fgets(p[i].nome,50,stdin);
        printf("Digite a rua:");
        fgets(p[i].ender.rua,50,stdin);
         printf("Digite o Estado:");
        fgets(p[i].ender.estado,50,stdin);
         printf("Digite a cidade:");
        fgets(p[i].ender.cidade,50,stdin);
        printf("Digite o numero:");
        scanf("%d", &p[i].ender.numero);
        printf("Digite o telefone:");
        scanf("%d", &p[i].telefone);
    }
        scanf("%d", &p[3].id);
 };
 void buscar_cliente (int n ,cliente p[3]  )
 {    int aux;
         aux = p[3];
     for(int i =0 ; i<n;i++)
    {
        printf("%d - %s",p[i].id ,p[i].nome  );
         printf("%s, %d",p[i].ender.rua ,p[i].ender.numero );
          printf("%s, %s",p[i].ender.cidade ,p[i].ender.estado );
          printf("%d",p[i].telefone );
    }
 };
int main() {
    cliente pessoas[3];
     ler_cliente(pessoas,3);
   buscar_cliente(pessoas, 3);
    return 0;
}
