/*
* system.c (C)
* 
* Objetivo: Estudo execução de Shell command em c.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 03/11/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

#include <stdio.h>
#include <sys/wait.h>
#include <unistd.h>

void system(const char *command)
{
	pid_t pid;
	int status;

	pid = fork();

	if(pid<0){
		fprintf(stderr,"%s: failed to fork",__FILE__);
	}else if(pid==0){/* child */
		execl("/bin/sh","sh","-c",command,(char*)NULL);
		_exit(127);
	}else{/* parent */
		waitpid(pid,&status,0);
		if(status<0) fprintf(stderr,"%s: failed to run \"%s\"",__FILE__,command);
	}
}

int main(void){

	system("echo 'rodar comando shell em c. ~$ ls' && ls");
}
