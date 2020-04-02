/*
* estudo.c (C)
* 
* Objetivo: Estudo sobre a api do Madagascar 'axa.c' que cria os
* eixos coordenados dos arquivos RSF. Estrutura de dados sf_Axis
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 01/04/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#include <string.h>
#include <stdio.h>
#include <stdlib.h>

typedef struct sf_Axis *sf_axis;

struct sf_Axis{
	int n;
	float o,d;
	char *l, *u;
};

void sf_setlabel(sf_axis AA, const char* label)
/*< change axis label >*/
{
	size_t len;

	if(NULL != AA->l) free(AA->l);
	len = strlen(label)+1;
	AA->l = (char*) malloc(sizeof(len));
	memcpy(AA->l,label,len);

}

void sf_setunit(sf_axis AA, const char* unit)
/*< change axis unit >*/
{
	size_t len;

	if(NULL != AA->u) free(AA->u);
	len = strlen(unit)+1;
	AA->u = (char*) malloc(sizeof(len));
	memcpy(AA->u,unit,len);
}


sf_axis sf_maxa(int n /* length */,
		float o /* origin */,
		float d /* sampling */)
/*< make a simple axis >*/
{
	sf_axis AA;

	AA = (sf_axis) malloc(sizeof(*AA));
	AA->n=n;
	AA->o=o;
	AA->d=d;
	AA->l=NULL;
	AA->u=NULL;
	sf_setlabel(AA,"");
	sf_setunit(AA,"");

	return AA;
}

int sf_n(sf_axis AA){return AA->n;}
float sf_d(sf_axis AA){return AA->d;}
float sf_o(sf_axis AA){return AA->o;}
char* sf_label(sf_axis AA){return AA->l;}
char* sf_unit(sf_axis AA){return AA->u;}

void sf_setn(sf_axis AA, int n){AA->n=n;}
void sf_setd(sf_axis AA, float d){AA->d=d;}
void sf_seto(sf_axis AA, float o){AA->o=o;}

int main(void){

	sf_axis ax;

	ax = sf_maxa(10,0,0.5);

	sf_setlabel(ax,"Distância");
	sf_setunit(ax,"Km");

	printf("Antes: n=%d, o=%f, d=%f, label=%s, unit=%s\n",
		sf_n(ax),
		sf_o(ax),
		sf_d(ax),
		sf_label(ax),
		sf_unit(ax));
	
	sf_setn(ax,20);
	sf_setd(ax,0.1);
	sf_seto(ax,1);
	sf_setlabel(ax,"Profundidade");
	sf_setunit(ax,"m");
	printf("Depois: n=%d, o=%f, d=%f, label=%s, unit=%s\n",
		sf_n(ax),
		sf_o(ax),
		sf_d(ax),
		sf_label(ax),
		sf_unit(ax));

}








