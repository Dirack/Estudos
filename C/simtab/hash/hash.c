#include <stdio.h>
#include <stdlib.h>
#include <string.h>

static unsigned int hash(const char *key, int size)
/* hashing function */
{
	unsigned int h;
	unsigned char *p;

	h=0;
	for(p=(unsigned char*) key; *p != '\0'; p++){
		h=31*h+(int) *p;
	}
	return (h%size);
}

static char* strsep1(char **stringp, const char *delim)
/* portable strsep */
{
	char* start = *stringp;
	char *cp;
	char ch;

	if(start == NULL) return NULL;

	for(cp =start; (ch = *cp); cp++){
		if(strchr(delim, ch)){
			*cp++=0;
			*stringp = cp;
			return start;
		}
	}
	*stringp = NULL;
	return start;
} 

int main(void){
	printf("%u\n",hash("chave",1000));
	printf("%u\n",hash("apenasumteste",1000));
	printf("%u\n",hash("seilacara",10000));
	printf("%u\n",hash("chavetestecpa",1000000));
	printf("%u\n",hash("chavetestecpa",1000000));
	printf("%u\n",hash("chavetestecpa",1000000));
}
