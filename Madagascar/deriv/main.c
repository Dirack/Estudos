#include <rsf.h>

int main(int argc, char* argv[]){
	int n1, i1;
	float d1;
	float *dat, *der;
	sf_file in=NULL, out=NULL;
	sf_init (argc,argv);
    	in = sf_input("in");
    	out = sf_output("out");

	if (!sf_histint(in,"n1",&n1)) sf_error("No n1= in input");
	if (!sf_histfloat(in,"d1",&d1)) sf_error("No d1= in input");

	dat = sf_floatalloc(n1);
    	der = sf_floatalloc(n1);

	sf_deriv_init(n1, 6, 0.);
	sf_floatread(dat,n1,in);
        sf_deriv(dat,der);

	for (i1=0; i1 < n1; i1++) {
                der[i1] /= d1;
        }


        sf_floatwrite(der,n1,out);
}
