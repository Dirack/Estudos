
#include <omp.h>
#include <stdio.h>
#define NUM_THREADS 6

static long num_steps = 100000000;
double step;

int main(void){
	double pi;
	double sum[NUM_THREADS];
	double t;
	int dstep=num_steps/NUM_THREADS;
	int j;

	t = omp_get_wtime();

	step = 1./num_steps;

	#pragma omp parallel num_threads(NUM_THREADS)
	{
		int i;
		double x;
		int ID = omp_get_thread_num();

		for(i=ID*dstep;i<(ID+1)*dstep;i++){
			x=(i+0.5)*step;
			sum[ID] += 4.0/(1.0+x*x);
		}
	}

	for(j=0;j<NUM_THREADS;j++)
		pi += sum[j]*step;

	t = omp_get_wtime()-t;
	printf("pi=%f t=%f\n",pi,t);
}
