/* Input.h (Biblioteca do C)
*
* Objetivo: Lidar com parâmetros passados pela linha de comandos.
* 
* Documentação: http://www.dirackslounge.online/C/bibliotecas_dirack/input.html
*
* Funcionamento:
* 	input.h constrói uma tabela simbólica de parâmetros. Para tanto, deve-se
*	utilizar a função construtora da tabela, adicionando o comando 
*	abaixo ao programa:
*
*		init(argc,argv);
*
*	Exemplo, se os parâmetros foram passados da seguinte forma ao programa
*	principal por linha de comandos:
*
*		bash~$ ./programa_principal par1=10 par2=2.34 par3=4.32
*	
*	A tabela simbólica de parâmetros terá a forma:
*	
*		**tabela de parâmetros**
*
*		tam(número de parâmetros)=3
*		--------------------
*		pars[0]	| par1="10"
*		--------------------
*		pars[1] | par2="2.34"
*		--------------------
*		pars[2] | par3="4.32"
*		--------------------
*
*	Cada parâmetro é armazenado na forma chave="valor" e
*	pode ser acessado utilizando as funções get, como abaixo:
*
*		if (!getfloat("par2",&p)) p=0.;
*
*	No comando acima o valor do parâmetro par2 passado pela linha de comandos será atribuído à
*	variável p do tipo float. Se nenhum valor for passado, o valor de p será 0.
*
* Versão 1.0 
* 
* Programador: Rodolfo A. C. Neves (Dirack) 23/11/2018
*
* Email: rodolfo_profissional@hotmail.com  
*
* Acesse conteúdo exclusivo e tire dúvidas no nosso site:
*	http://www.dirackslounge.online
*
*
* Licensa:
*
*  Copyright (C) 2018 grupo de programação aplicada à geofísica (GPGEOF)
*  da Universidade Federal do Pará (UFPA); Belém, Pará, Brasil. 
*
*  Esse programa é um software livre; você pode redistribuir e/ou modificar
*  sobre os termos da licensa pública geral (LPG) publicada pela Free 
*  Software Foundation; na versão 2 da licensa, ou (a seu critério) qualquer
*  versão posterior.
*
*  Este programa é distribuído na esperança que será útil, mas SEM NENHUMA
*  GARANTIA; nem mesmo a garantia implícita de MERCANTILIDADE ou SERVENTIA
*  A UM PROPÒSITO DETERMINADO. veja a LPG licensa pública geral para mais
*  detalhes.
*
*  Você deve ter recebido uma cópia da LPG licensa pública geral junto com
*  este programa; se não, escreva para a Free Software Foundation, Inc., 
*  51 Franklin Street, Quinquagésimo andar, Boston, MA  02110-1301, USA.
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#ifndef _tabela_h
#define _tabela_h

char *istrdlm(char *string, char *delim){
/*< Cortar uma string na posição do delimitador, semelhante ao 'cut' do Shell >*/
	
	int i; // contador de laço
	int d=0; // posição do delimitador
	int tam = strlen(string); // tamanho da string
	char *str1; // string cortada

	/* Verifica qual a posição do delimitador na string */
	for(i=0;i<tam;i++){

		if(string[i]==delim[0]){
			break;
		}

		d++;	

	}

	char s1[d+1]; // string temporária

	/* 's1' recebe um pedaço de 'string' */
	for(i=0;i<d;i++){
		s1[i]=string[i];
	}

	/* último caractere é NULL */
	s1[d]='\0';

	str1 = &s1[0];

	return str1;
}


char *istrdlm_r(char *string, char *delim){
/*< Variação de strdlm. Porém, retorna o campo após o delimitador >*/	

	int i; // contador de laço
	int d=0; // posição do delimitador
	int tam = strlen(string); // tamanho da string
	char *str2; // string cortada

	/* Verifica qual a posição do delimitador na string */
	for(i=0;i<tam;i++){

		if(string[i]==delim[0]){
			break;
		}

		d++;
	}

	char s2[tam+1];// string temporária

	/* 's2' recebe um pedaço de 'string' */
	for(i=d+1;i<tam;i++){
		s2[i-d-1]=string[i];
	}

	/* último caractere é NULL */
	s2[tam+1]='\0';

	str2 = &s2[0];

	return str2;
	
}


/* Estrutura da tabela simbólica de parâmetros */
typedef struct {

	int tam; //Número de parâmetros da tabela (passados pela linha de comandos)
	char **pars; // Parâmetro armazenado em uma string na forma param="valor"

}tb_pars;

static tb_pars tabela; //Tabela é o alias (apelido) da estrutura tb_pars

void init(int tam, char **p){
/*< Construtor: Inicializa a tabela simbólica de parâmetros >*/	

	tabela.tam=tam; // Tamanho da tabela
	tabela.pars=&p[0]; // parâmetros
		
}

/*< Funções GET >*/

/* 
   Procuram pela chave 'string' (passada como argumento da função), 
   através da comparação com 'str' (string temporária que varre uma a uma
   as chaves da tabela de parâmetros).
   os valores da tabela estão armazenados na forma chave=valor.
   Se o Parâmetro está na tabela de parâmetros, a função get retorna 'True' 
   e atribui o valor do parâmetro ao endereço passado em *pi.
   Se o parâmetro não for encontrado retorna 'false'.
*/

bool getint(char *string, int *pi) {
/*< Pesquisa parâmetro do tipo int na tabela de parâmetros >*/

	char *str; 
	int i; 
	bool resp=false; 

	for (i=1;i<tabela.tam;i++){

		str=istrdlm(tabela.pars[i],"=");

		if(strcmp(string,str)==0) {
			*pi=atoi(istrdlm_r(tabela.pars[i],"="));			
			resp=true;
			break;
		}
	}

	return resp;
}

bool getfloat(char *string, float *pi) {
/*< Pesquisa parâmetro do tipo float na tabela de parâmetros >*/

	char *str;
	int i;
	bool resp=false;

	for (i=1;i<tabela.tam;i++){

		str=istrdlm(tabela.pars[i],"=");

		if(strcmp(string,str)==0) {
			*pi=atof(istrdlm_r(tabela.pars[i],"="));			
			resp=true;
			break;
		}
	}

	return resp;
}

bool getdouble(char *string, double *pi) {
/*< Pesquisa parâmetro do tipo double na tabela de parâmetros >*/

	char *str;
	int i;
	bool resp=false;

	for (i=1;i<tabela.tam;i++){

		str=istrdlm(tabela.pars[i],"=");

		if(strcmp(string,str)==0) {
			*pi=atof(istrdlm_r(tabela.pars[i],"="));			
			resp=true;
			break;
		}
	}

	return resp;
}

#endif
