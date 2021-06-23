#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <stdbool.h>
#include <string.h>
#include "_alloc.h"

struct entry{
	char *key, *val;
	struct entry* next;
};

struct sf_SimTab{
	struct entry **pars;
	int size;
};

typedef struct sf_SimTab *sf_simtab;

sf_simtab sf_simtab_init(int size){
	sf_simtab table;
	int i;

	table = (sf_simtab) sf_alloc(1,sizeof(*table));
	table->pars = (struct entry**) sf_alloc(size,sizeof(struct entry*));
	table->size=size;

	for(i=0; i<size; i++){
		table->pars[i]=NULL;
	}
	return table;
}	

static unsigned int hash(const char* key, int size){
	unsigned int h;
	unsigned char *p;

	h=0;
	for(p=(unsigned char*) key; *p != '\0'; p++){
		h=31*h+(int)*p;
	}
	return (h%size);
}

void sf_simtab_enter(sf_simtab table, const char *key, const char* val){
	int h;
	struct entry *e;
	size_t len;

	h = hash(key,table->size);

	for(e=table->pars[h]; e!=NULL; e = e->next){
		if(strcmp(key,e->key)==0){
			if(strcmp(val,e->val)!=0){
				len = strlen(val)+1;
				e->val = (char*) sf_realloc(e->val,len,1);
				memcpy(e->val,val,len);
			}
			return;
		}
	}

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
