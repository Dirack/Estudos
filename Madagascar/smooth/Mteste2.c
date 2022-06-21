/* Estudo sobre o programa sfsmooth.
Multi-dimensional triangle smoothing. 

January 2012 program of the month:
http://ahay.org/blog/2012/01/01/program-of-the-month-sfsmooth/
*/

#include <rsf.h>
#include "func.h"

int main (int argc, char* argv[]) 
{
	int n[2]={301,1001};
	int rect[2]={10,10};
	int nrep=2;
	float* data;
	sf_file in, out;

	sf_init (argc, argv);
	in  = sf_input ("in");
	out = sf_output ("out");

	if (SF_FLOAT != sf_gettype(in)) sf_error("Need float input");

	data = sf_floatalloc(n[0]*n[1]);

	sf_floatread(data,n[0]*n[1],in);

	smooth(data,n,nrep,rect);

	sf_floatwrite(data,n[0]*n[1],out);

	exit (0);
}
