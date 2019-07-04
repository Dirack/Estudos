/*
	 estudoPonteiros.c (c)
	 
	 Objetivo: Estudo sobre ponteiros de estruturas em C - segunda parte.
	 
	 Versão 1.0
	 
	 Site: http://www.dirackslounge.online
	 
	 Programador: Rodolfo A. C. Neves (Dirack) 04/07/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: Software de uso livre e código aberto.
*/

#include <stdio.h>

int main(void){

	struct horario{
		int hora;
		int minuto;
		int segundo;
	};

	struct horario agora;
	struct horario* depois;
	depois = &agora;

	depois->hora = 20;
	depois->minuto = 30;
	depois->segundo = 54;

	depois->hora = 10 + depois->minuto;

	printf("%i:%i:%i\n", agora.hora, agora.minuto, agora.segundo);

}
	
