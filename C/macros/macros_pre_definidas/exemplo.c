/*
* exemplo.c (C)
* 
* Objetivo: Estudo sobre macros pré definidas.
* Durante o pré processamento o pré processador expande 
* as macros pré-definidas. Aqui utilizamos dois tipos de macros
* pré definidas, as macros padrão do C e as macros padrão do GNU.
*
* Documentação oficial sobre as macros:
* https://gcc.gnu.org/onlinedocs/cpp/Standard-Predefined-Macros.html#Standard-Predefined-Macros
* https://gcc.gnu.org/onlinedocs/cpp/Common-Predefined-Macros.html#Common-Predefined-Macros
* 
* Site: http://www.dirackslounge.online
* 
* Versão 1.0
* 
* Programador: Rodolfo Dirack 26/01/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/


#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]){

	fprintf(stderr,"Nome do arquivo: %s\n",__FILE__);
	fprintf(stderr,"Data de compilação: %s\n",__DATE__);
	fprintf(stderr,"Horário de compilação: %s\n",__TIME__);
	fprintf(stderr,"Mensagem na linha: %d\n",__LINE__);
	fprintf(stderr,"Última modificação: %s\n",__TIMESTAMP__);
	fprintf(stderr,"Estou dentro da função: %s\n",__FUNCTION__);
	fprintf(stderr,"Outra forma de dizer a função atual: %s\n",__func__);

	exit(0);
}
