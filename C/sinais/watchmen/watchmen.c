/*
* watchmen.c (C)
* 
* Objetivo: Esboço de um monitor de processos.
* Executa os scripts descritos na fila de execução (vetor fila).
* As funções sinal e encerra são respostas a sinais enviados com o
* comando kill a este programa:
* 	- Se o usuário usar kill -1 PID, responde com pids dos processos
*	- Se o usuário usar kill -15 PID ou Ctrl+c, encerra a execução
* Chama fork para iniciar um processo filho, e execl para executar outro
* processo, chamando os scripts exe na pasta atual, com a ordem definida
* no vetor fila.
*
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 11/04/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <unistd.h>
#include <sys/wait.h>

char* execAtual;

void status(int signum){
	printf("PID: %i PPID: %i\n",getpid(),getppid());
	printf("CALL: %s\n",execAtual);
}

void encerra(int signum){
	exit(0);
}

int main(void){

	char* fila[4]={"./exe1","./exe2","./exe1","./exe2"};
	int i;
	pid_t childPIDorZero;

	signal(1,status);
	signal(15,encerra);

	printf("Pai: %i\n",getpid());

	for(i=0;i<4;i++){
		
		execAtual=fila[i];

		childPIDorZero = fork();

		if(childPIDorZero==0){
			printf("FILHO: %i\n",getpid());
			execl(execAtual,execAtual,NULL);
		}else{
			//espera o filho encerrar para executar
			wait(NULL);
			printf("pai\n");
		}
	}
}
