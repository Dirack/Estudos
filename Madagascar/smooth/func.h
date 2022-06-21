#ifndef __FUNC_H__
#define __FUNC_H__

void smooth(float *data, int *n, int nrep, int *rect)
/*< TODO >*/
{
	int dim = 2;
	int dim1 = 1;
	bool diff[2]={0,0};
	bool box[2]={0,0};
	int s[2];
	sf_triangle tr;
	int n1, n2;
	bool adj=false;
	int i, j, i0, irep;

	n1 = n2 = 1;
	for (i=0; i < dim; i++) {
		if (i <= dim1) {
			s[i] = n1; 
			n1 *= n[i];
		} else {
			n2 *= n[i];
		}
	}

	for (i=0; i <= dim1; i++) {
		if (rect[i] <= 1) continue;
			tr = sf_triangle_init (rect[i],n[i],box[i]);
		for (j=0; j < n1/n[i]; j++) {
			i0 = sf_first_index (i,j,dim1+1,n,s);
			for (irep=0; irep < nrep; irep++) {
				if (adj) {
					sf_smooth (tr,i0,s[i],diff[i],data);
				} else {
					sf_smooth2 (tr,i0,s[i],diff[i],data);
				}
			}
		}
		sf_triangle_close(tr);
	}
}
#endif
