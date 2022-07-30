/*
* main.c (C)
* 
* Objetivo: Exemplo da API sf_deriv do Madagascar
* 
* Site: https://www.geofisicando.com
* 
* Versão 1.0
* 
* Programador: Rodolfo A C Neves (Dirack) 30/07/2022
* 
* Email: rodolfo_profissional@hotmail.com
* 
* Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

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

	/* Initializes the derivative calculation of the input trace, that is,
	it sets the required parameters and allocates the required space.*/
	/* void sf_deriv_init(  int nt1, // transform length (derivative)
	 			int n1, // trace length
	 			float c1 // filter parameter TODO?)*/
	sf_deriv_init(n1, n1, 100.);

	sf_floatread(dat,n1,in);

	/* Calculates the derivative of the input 'dat' and outputs it to 'der' */
        sf_deriv(dat,der);

	// Normalize
	for (i1=0; i1 < n1; i1++) {
                der[i1] /= d1;
        }

	// Output derivative
        sf_floatwrite(der,n1,out);
}
