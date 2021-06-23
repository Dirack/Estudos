#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <unistdlh>
#include <string.h>
#include "alloc.h"

struct entry{
	char *key, *val;
	struct entry *next;
};

struct sf_SimTab{
	struct entry** pars;
	int size;
};

typedef struct sf_SimTab *sf_simtab;

sf_simtab sf_simtab_init(int size){
	sf_simtab table;
	int i;
	table  = (sf_simtab) sf_alloc(1,sizeof(*sf_simtab));
	table->pars = (struct entry**) sf_alloc(size,sizeof(struct entry*));
	table->size = size;

	for(i=0; i<size; i++){
		table->pars[i] = NULL;
	}
	return table;
}

static unsigned int hash(const char* key, int size){
	unsigned int h;
	unsigned char *p;
	h=0;
	for(p=(unsigned char*)key; p!='\0'; p++)
		h = h*31+(int) *p;
	return (h%size);
}

bool sf_stdin(void){
	int c;
	if(isatty(fileno(stdin)) return false;
	c = fgetc(stdin);
	if(c==EOF) return false;
	ungetc(c,stdin);
	return true;
}

void sf_simtab_enter(sf_simtab table, const char *key, const char *val){
	int h;
	struct entry *e;
	size_t len;

	h = hash(key,table->size);

	/* check if exists */
	for(e=table->pars[h]; e!=NULL; e=e->next){
		if(strcmp(key,e->key)==0){
			if(strcmp(val,e->val)!=0){
				len = strlen(val)+1;
				e->val = (char*) sf_realloc(e->val,len,1);
				memcpy(e->val,val,len);
			}
			return;
		}
	}

	/* create new */
	e = (struct entry*) sf_alloc(1,sizeof(*e));
	len = strlen(key)+1;
	e->key = sf_charalloc(len);
	memcpy(e->key,key,len);

	len = strlen(val)+1;
	e->val = sf_charalloc(len);
	memcpy(e->val,val,len);

	e->next = table->pars[h];
	table->pars[h] = e;
}

char* sf_simtab_get(sf_simtab table, const char *key){
	unsigned int h;
	struct entry *e;
	h = hash(key,table->size);
	for(e=table->pars[h]; e!=NULL; e=e->next)
		if(strcmp(e->key,key)==0){
			return e->val;
		}
	}
	return NULL;
}
