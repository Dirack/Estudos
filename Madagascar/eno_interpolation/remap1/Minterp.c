/* 2-D ENO interpolation. */

#include <rsf.h>

int main(int argc, char* argv[])
{
	sf_eno2 map;
	sf_file in, out;
	int n1, n2;
	float d1, d2, o1, o2;
	float* slow;
	float *f, f2[2];
	int i, j, i1, i2;
	float x, y;

	sf_init (argc, argv);
	in  = sf_input ("in");
	out = sf_output("out");

	if (!sf_histint(in,"n1",&n1)) sf_error("No n1= in input");    
	if (!sf_histfloat(in,"d1",&d1)) sf_error("No d1= in input");
	if (!sf_histfloat(in,"o1",&o1)) sf_error("No o1= in input");
	if (!sf_histint(in,"n2",&n2)) sf_error("No n1= in input");    
	if (!sf_histfloat(in,"d2",&d2)) sf_error("No d1= in input");
	if (!sf_histfloat(in,"o2",&o2)) sf_error("No o1= in input");

	slow = sf_floatalloc(n1*n2);
	sf_floatread(slow,n1*n2,in);
	map = sf_eno2_init(3,n1,n2);
	f = sf_floatalloc(20*20);

	sf_eno2_set1(map,slow);

	for(i2=0;i2<20;i2++){

		for(i1=0;i1<20;i1++){
			x = i1*0.5; i=x; x -= i;
			y = i2*0.5; j=y; y -= j;
			sf_eno2_apply(map,i,j,x,y,&f[i2*20+i1],f2,FUNC);
			#ifdef GDB_DEBUG
			sf_warning("%d %d %d %d %d %f",i2*20+i1,i,j,x,y,f[i2*n1+i1]);
			#endif
		}
	}
	sf_eno2_close(map);

	sf_putint(out,"n1",20);
	sf_putint(out,"n2",20);
	sf_putfloat(out,"d1",0.5);
	sf_putfloat(out,"d2",0.5);
	sf_floatwrite(f,20*20,out);
}
