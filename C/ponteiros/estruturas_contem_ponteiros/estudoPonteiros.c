/*
	 estudoPonteiros.c (c)
	 
	 Objetivo: Estudo sobre estruturas que contém ponteiros em C.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 04/07/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

#include <stdio.h>

int main(void){

	struct horario{
		int* pHora;
		int* pMinuto;
		int* pSegundo;
	};

	struct horario agora;

	int hora = 100;
	int minuto = 200;
	int segundo = 300;

	agora.pHora = &hora;
	agora.pMinuto = &minuto;
	agora.pSegundo = &segundo;

	printf("%i:%i:%i\n", *agora.pHora, *agora.pMinuto, *agora.pSegundo);

}
	
