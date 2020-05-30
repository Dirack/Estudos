/*
 *	Warren_buffet.c (C)
 *
 *	Objetivo: Programa para avaliação fundamentalista de ações.
 *	Baseado nas fórmulas do livro: "as escolhas de warren buffet" de 
 *	Mary Buffet e David Clark (pg. 159).
 *
 *	Versão 1.0
 *
 *	Email: Rodolfo_profissional@hotmail.com 
 *
 *	Programador: Rodolfo A. C. Neves (Dirack) 13/01/2018
 *
 *	IMPORTANTE: Este programa não constitui de maneira nenhuma remomendação 
 *	de investimento ou compra de ações. Possui apenas caráter ilustrativo e explicativo. 
 *	A utilização do mesmo para fins de estabelecimento de estratégias com ações ou qualquer
 *	outro tipo de investimentos são de única responsabilidade dos usuários. 
 *	O autor não assume responsabilidade por qualquer prejuízo financeiro ou pela utilização 
 *	deste programa para além de fins didáticos e educacionais.
 */

#include <math.h> 
#include "input.h"
#include <stdio.h>
#include <stdlib.h>

int main(int argc,char* argv[]){

	float vcaAtual; // Valor contábil (VCA) atual também chamado de Valor patrimonial (VPA)
	float lpaAntigo; // Lucro por Ação (LPA) mais antigo do histórico 
	float lpaAtual; // Lucro por Ação (LPA) atual
	float t; // período em anos
	float pl; // Preço por Lucro (P/L) mais baixo do histórico
	float pc; // Preço de compra da ação (estimado)
	float div; // dividendo anual estimado
	float lpaProjetado; // LPA projetado t anos no futuro
	float precoAcao; // Preço da ação projetado
	float rendimentoEquityBond; // rendimento a partir do conceito de 'Equity Bond' vide referências
	float equityBondReal; // rendimento a partir do conceito de 'Equity Bond Real' vide referências
	float taxalpa; // Taxa de Crescimento do LPA a.a
	float Total; // Rendimento total (preço da ação projetado + dividendos projetados)
	float taxaTotal; // Taxa composta do rendimento total a.a

	/* Leitura dos parâmetros pela linha de comandos */
	init(argc,argv);

	if (!getfloat("vcaAtual",&vcaAtual)) vcaAtual=16.55;
	/* VCA atual */

	if (!getfloat("lpaAntigo",&lpaAntigo)) lpaAntigo=1.32;
	/* LPA mais antigo */

	if (!getfloat("lpaAtual",&lpaAtual)) lpaAtual=2.05;
	/* LPA atual */
		
	if (!getfloat("t",&t)) t=10.;
	/* período de tempo */		
		
	if (!getfloat("pl",&pl)) pl=12.3;
	/* Indicador preço/lucro (P/L) mais baixo do histórico */

	if (!getfloat("pc",&pc)) pc=24;
	/* Preço de compra */

	if (!getfloat("div",&div)) div=0.5;
	/* Dividendo anual esperado */

	/* Programa principal */
			
	//calcule a taxa de crescimento anual do Lucro por ação (LPA - Projetado)
	taxalpa=pow((lpaAtual/lpaAntigo),1/t)-1;
		
	//calcule o LPA projetado com base na taxa de crescimento do LPA
	lpaProjetado=lpaAtual*pow((1+taxalpa),t);

	//calcule o preço da ação (Projetado)
	precoAcao=lpaProjetado*pl;
		
	//calcule o rendimento 'equity bond'
	rendimentoEquityBond=lpaAtual/vcaAtual;
		
	//calcule o rendimento equity bond real
	equityBondReal=lpaAtual/pc;

	// Dividendo acumulado + preço da ação
	Total=precoAcao+(t*div);

	// Rendimento total taxa composta Dividendo acumulado + preço da ação
	taxaTotal=pow((Total/pc),1/t)-1;
		
	/* Resultado na Tela */
	printf("*****************************Ação**********************************\n");
	printf("Equity Bond: (R$%g/%gR$=%g\%)\n", lpaAtual, vcaAtual,rendimentoEquityBond*100);
	printf("Preço de compra: R$%g\n",pc);
	printf("Equity Bond Real: (R$%g/%gR$=%g\%)\n", lpaAtual,pc,equityBondReal*100);
	printf("LPA projetado: R$%g\n",lpaProjetado);
	printf("Preço da ação projetado: R$%g\n",precoAcao);
	printf("Taxa de crescimento LPA (a.a): %g\%\n", taxalpa*100);
	printf("O retorno em %g anos será: %g\%\n", t, ((precoAcao/pc)-1)*100);
	printf("**************************Dividendos*****************************\n");
	printf("Preço projetado + dividendo (%g X R$%g): R$%g\n",t,div,Total);
	printf("O retorno em %g anos será: %g\%\n",t,((Total/pc)-1)*100);
	printf("Taxa composta (a.a) de dividendos: %g\%\n",taxaTotal*100);
		
	return 0;
}

