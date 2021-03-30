#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main(void){
	
	float x=2.55;
	float dx=x-(int)x; // Parte decimal de x = 2.55-2 = 0.55

	if(dx<0.5){	
		printf("Arredonda x para baixo: x=%f\n",floor(x));
	}else{
		printf("Arredonda x para cima: x=%f\n",ceil(x));
	}
}
