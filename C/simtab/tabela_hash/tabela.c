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

int main(void){
	sf_simtab t;
	t = sf_simtab_init(1000);
}
