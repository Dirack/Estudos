char* sf_simtab_get(sf_simtab table, const char *key){
	unsigned int h;
	struct entry *e;
	
	h = hash(key,table->size);
	for(e=table->pars[h]; e!=0; e=e->next){
		if(strcmp(e->key,key)==0) return e->val;
	}
	return NULL;
}

void sf_simtab_enter(sf_simtab table, const char* key, const char* val){
	unsigned int h;
	struct entry *e;
	size_t len;

	h = hash(key,table->size);

	/* check if exists */
	for(e=table->pars[h]; e!=NULL; e=e->next){
		if(strcmp(e->key,key)==0){
			if(strcmp(e->val,val)!=0){
				len=strlen(val)+1;
				e->val = (char*) sf_realloc(e->val,len,1);
				memcpy(e->val,val,len);
			}
			return;
		}
	}

	/* create new */
	e = (struct entry*) sf_alloc(1,sizeof(*e));

	len=strlen(key)+1;
	e->key = sf_charalloc(len);
	memcpy(e->key,key,len);

	len=strlen(val)+1;
	e->val = sf_charalloc(len);
	memcpy(e->val,val,len);

	e->next = table->pars[h];
	table->pars[h]=e;
}

static unsigned int hash(const char* key, int size){
	unsigned int h;
	unsigned char *p
	h=0;
	for(p=(unsigned char*) key; p!='\0'; p++)
		h = 31*h + (int) *p;
	return (h%size);
}

}
