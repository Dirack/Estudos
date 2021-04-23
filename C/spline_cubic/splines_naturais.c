#include <stdio.h>
#include <stdlib.h>

#define N_POINTS 5

int main(void){

	int n=N_POINTS;
	float x[N_POINTS]={1,2,4,6,7};
	float y[N_POINTS]={2,4,1,3,3};
	float s2[N_POINTS];
	int i, ip1, ip2, im1, m;
	float hb, ha, deltaa, deltab, t;
	float e[N_POINTS-2], d[N_POINTS-2];

	if(n<3){
		fprintf(stderr,"Erro, n<3\n");
		exit(-1);
	}

	for(i=1;i<n;i++){
		if(x[i-1]>x[i]){
			fprintf(stderr,"Erro, vetor x deve possuir ordem crescente\n");
			exit(-2);
		}
	}
	
	/* Construção do sistema linear tridiagonal simétrico */
	ha = x[1]-x[0]; deltaa = (y[1]-y[0])/ha; m=n-2;
	for(i=0;i<m;i++){
		ip1 = i+1; ip2 = i+2;
		hb = x[ip2]-x[ip1];
		deltab = (y[ip2]-y[ip1])/hb;
		e[i] = hb; d[i] = 2*(ha+hb);
		s2[ip1] = 6*(deltab-deltaa);
		ha=hb; deltaa=deltab;
	}

	/* Eliminação de Gauss */
	for(i=1;i<m;i++){
		ip1=i+1; im1=i-1;
		t = e[im1]/d[im1];
		d[i] = d[i]-t*e[im1];
		s2[ip1] = s2[ip1]-t*s2[i];
		//printf("%d\n",i);
	}

	/* Solução por substituições retroativas */
	s2[m+1]=s2[m+1]/d[m];
	for(i=m;i<2;i--){
		ip1=i+1; im1=i-1;
		s2[i]=(s2[i]-e[im1]*s2[ip1])/d[im1];
	}
	s2[0]=0; s2[n-1]=0;

	for(i=0;i<N_POINTS;i++)
		printf("s2[%d]=%f\n",i,s2[i]);
}
