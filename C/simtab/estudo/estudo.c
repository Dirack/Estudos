/*
* estudo.c (C)
* 
* Objetivo: Estudo sobre tabela de parâmetros do Madagascar.
* Esta função separa chaves e valores da stdin para serem armazenados,
* em uma tabela hash de parâmetros que é uma estrutura da API do
* Madagascar definida em '$RSFSRC/api/c/simtab.c'.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 02/04/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void sf_simtab_put (const char *keyval) 
/*< split a key=val string to the table >*/
{
    char *eq, *key;
    size_t keylen;

    /* strchr corta key=val em =val e atribui para eq */
    eq = strchr(keyval,'='); 
    //printf("eq=%s\n",eq);
    if (NULL == eq) return;
    eq++;
    
    /* keylen é o tamanho da chave key de key=val */
    keylen = (size_t) (eq-keyval);
    //printf("keylen=%ld\n",keylen);
    key = (char*) malloc(keylen*sizeof(char));
    memcpy(key,keyval,keylen);
    key[keylen-1]='\0';

    printf("%s %s\n",key,eq);
}

int main(int argc,char* argv[]){
	
	int i;

	for(i=0;i<argc;i++){
		sf_simtab_put(argv[i]);
	}
}
