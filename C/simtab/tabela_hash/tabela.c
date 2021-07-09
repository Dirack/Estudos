#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "_alloc.h"

struct entry {
    char *key, *val;
    struct entry* next;
};

struct sf_SimTab {
    struct entry **pars;
    int size;
};

typedef struct sf_SimTab *sf_simtab;

static unsigned int hash (const char *key, int size)
/* Taken from Kernigan and Pike, "The practice of programming" */
{
    unsigned int h;
    unsigned char *p;

    h=0;
    for (p = (unsigned char*) key; *p != '\0'; p++) {
        h = 31 * h + (int) *p;
    }
    return (h % size);
}

sf_simtab sf_simtab_init(int size)
/*< Create simbol table. >*/
{
    sf_simtab table;
    int i;


    table = (sf_simtab) sf_alloc(1,sizeof(*table));
    table->pars = (struct entry **) sf_alloc (size,sizeof(struct entry*));
    table->size = size;

    for (i=0; i < size; i++) {
        table->pars[i] = NULL;
    }

    return table;
}

void sf_simtab_close(sf_simtab table)
/*< Free allocated memory >*/
{
    int i;
    struct entry *e, *next;

    if (NULL==table) return;

    for (i=0; i < table->size; i++) {
	for (e = table->pars[i]; e != NULL; e = next) {	    
	    free (e->key);
	    free (e->val);
	    next = e->next;
	    free (e);
	}	
    }
    free(table->pars);
    free(table);
}

void sf_simtab_enter(sf_simtab table, const char *key, const char* val)
/*< Add an entry key=val to the table >*/
{
    int h;
    struct entry *e;
    size_t len;

    h = hash(key,table->size);

    /* check if exists */
    
    for (e = table->pars[h]; e != NULL; e = e->next) {
	if (strcmp(key,e->key) == 0) {
	    if (strcmp(val,e->val) != 0) {
		len = strlen(val)+1;
		e->val = (char*) sf_realloc(e->val,len,1);
		memcpy(e->val,val,len);
	    }
	    return;
	}
    }

    /* create new */
    
    e = (struct entry*) sf_alloc (1,sizeof(*e));

    len = strlen(key)+1;
    e->key = sf_charalloc(len); 
    memcpy(e->key,key,len);
    
    len = strlen(val)+1;
    e->val = sf_charalloc(len); 
    memcpy(e->val,val,len);

    e->next = table->pars[h];
    table->pars[h] = e;
}

char *sf_simtab_get(sf_simtab table, const char *key) 
/*< extract a value from the table >*/
{
    int h;
    struct entry *e;

    h = hash(key,table->size);

    for (e = table->pars[h]; e != NULL; e = e->next) {
	if (0 == strcmp(key,e->key)) return e->val;
    }
    return NULL;
}

int main(void){
	sf_simtab t;
	t = sf_simtab_init(1000);
	sf_simtab_enter(t,"capa","docia");
}
