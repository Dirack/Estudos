/*
* string.h (C)
* 
* Objetivo: Estudo sobre strlen e strcmp recursivas em c.
* 
* Site: https://dirack.github.io
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 24/09/2020
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

int newstrlen(char* s){
	if(*s=='\0')
		return 0;
	else
		return 1+newstrlen(s+1);
}

int newstrcmp(char* s1, char* s2){
	if (*s1=='\0' || s2[0]=='\0' || *s1!=*s2)
		return *s1-*s2;
	else
		return newstrcmp(s1+1,s2+1);
}
