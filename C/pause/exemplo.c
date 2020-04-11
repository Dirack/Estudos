/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre a chamada de sistema pause em C.
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

#include <unistd.h>
#include <stdio.h>
#include <time.h>
#include <signal.h>

void mensagem(int signum)
{
      time_t tp;
      time(&tp);
      printf("%s", ctime(&tp));
}

void main( )
{
     signal(SIGALRM, mensagem);
     printf("*** inicio do programa\n");
     while (1)
           {
                 alarm(5);
                 pause( );
           }
}


