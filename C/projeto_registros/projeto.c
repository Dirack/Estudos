#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <locale.h>
 
typedef struct {
    int id;
    char usuario[21];
    char mensagem [281];
    char data [11];
    char local [21];
    struct reg *prox;
    //char hashtags[200];
} registro;
 
 
 
int contaLinhas(char *arquivo) {
    FILE *f = NULL;
    char nomes[334];
    int cont = 0;
 
    f = fopen(arquivo, "r");
 
    if(f == NULL) {
        printf("Erro ao abrir o arquivo %s\n", arquivo);
        exit (0);
    } else {
        while (fscanf(f, "%[^\n]%*c", nomes) == 1) {
            cont++;
        }
    }
 
    fclose(f);
    return(cont);
}
 
registro *arrayRegistro(char *arquivo, int linhas) 
{
    FILE *f = NULL;
    char nomes[332];
    registro *registros = (registro *)malloc(sizeof(registro) * linhas);
    int cont = 1;
    char *token;
 
    registro *novo;
 
    f = fopen(arquivo, "r");
 
    if (f == NULL) 
    {
        printf("Erro ao abrir o arquivo %s\n", arquivo);
        exit(0);
    }
    else 
 
    {
        
        while (fscanf(f, "%[^\n]%*c", nomes) != EOF)
        {
            token = strtok(nomes, ";");
            strcpy(registros[cont].usuario, token);
                     
            registros[cont].id = cont;
                    
            token = strtok(NULL, ";");
            strcpy(registros[cont].mensagem, token);
            
            //não lê se a mensagem tiver com pulo na linha
 
            /*teste se passar do tamanho a msg
            if(sizeof(registros[cont].mensagem) == 281)
            {
                char aux_text[1000];
                            token = strtok(NULL, ";");
                            strcpy(aux_text, token);
                    printf("Msg: %s\n", aux_text);
            }*/
 
            token = strtok(NULL, ";");
            strcpy(registros[cont].data, token);
            
            token = strtok(NULL, "; \n");
            strcpy(registros[cont].local, token);
 
            printf("Id: %d | Usuario: %s | Mensagem: %s | Data: %s | Local: %s\n", registros[cont].id, registros[cont].usuario, registros[cont].mensagem, registros[cont].data, registros[cont].local); 
 
            cont++;     
        
        }
 
    }
        
    fclose(f);
    
    printf("Não chega aqui\n");

    return registros;
 
}
 
int main() 
{
    setlocale(LC_ALL, "Portuguese");
    
    char *registrosarq = "test2.csv";
    
    int linhas = contaLinhas(registrosarq); 
 
    registro *registros = arrayRegistro(registrosarq, linhas);
    
    FILE *fp;
    fp = fopen("registros.bin", "wb");
    
    int i;
    
    for (i = 0; i < linhas; i++) 
    {
        fwrite(&registros[i], sizeof(registro), 1, fp);
    }
    
    fclose(fp);
 
    return 0;
}

