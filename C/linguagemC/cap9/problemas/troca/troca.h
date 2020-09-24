void trocaPorReferencia(int* a, int* b){
	int tmp;
	printf("Troca por referência\n");
	printf("a=%d b=%d\n",*a,*b);
	tmp = *b;
	*b = *a;
	*a = tmp;
	printf("a=%d b=%d\n",*a,*b);
}

void trocaPorValor(int a, int b){
	int tmp;
	printf("Troca por valor\n");
	printf("a=%d b=%d\n",a,b);
	tmp = b;
	b = a;
	a = tmp;
	printf("a=%d b=%d\n",a,b);
}
