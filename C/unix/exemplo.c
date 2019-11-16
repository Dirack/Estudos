/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre as funções da biblioteca unistd.h
* 
* Site: http://www.dirackslounge.online
* 
* Versão 1.0
* 
* Programador: Rodolfo Dirack 16/11/2019
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>
#include <sys/wait.h>

int main(int argc, char* argv[]){

	pid_t childPIDorZero = fork();
	int i;

	if(childPIDorZero < 0){
		perror("fork error!\n");
		exit(-1);
	}

	if(childPIDorZero != 0){
		printf("Parent process PID %d, with CHILD_PID %d\n", getpid(), childPIDorZero);
		wait(NULL);
	}else{
		printf("Child process PID %d, parent PID %d\n", getpid(), getppid());
		printf("Stoped in the child process, use ps aux | grep -i %d command to se the process running", getpid());
		scanf("%i",&i);
		execl("/bin/echo","echo","Hello world, unix!",NULL);
	}

	printf("Returned to the parent, use ps aux | grep -i %d command to see the process running",getpid());
	scanf("%i",&i);

}

