void enoInterpolation2d(int *n, /* Interpolated vector dimension n1=n[0] n2=n[1] */
                        float *o, /* Interpolated vector  axis origin o1=o[0] o2=o[1] */
                        float *d, /* Interpolated vector sampling d1=d[0] d2=d[1] */
                        float *ov, /* Original vector to interpolate */
                        float *iv, /* Interpolated vector */
                        int nov1, /* Original vector n1 dimension */
                        int nov2 /* Orignanl vector n2 dimension */)
/*< Eno interpolation 2D function
Note: This function interpolates a vector increasing the number of
samples in the interpolated vector using eno interpolation. This vector
is a 2D matrix stored in a vector ov by columns (ov[j*n1+i]) and the new
vector iv will be the interpolated vector.
 >*/
{

        sf_eno2 map;
        float f2[2];
        int i, j, i1, i2; 
        float x, y;

        map = sf_eno2_init(3,nov1,nov2);

        sf_eno2_set1(map,ov);
        for(i2=0;i2<n[1];i2++){

                for(i1=0;i1<n[0];i1++){
                        x = i1*d[0]+o[0]; i=x; x -= i;
                        y = i2*d[1]+o[1]; j=y; y -= j;
                        sf_eno2_apply(map,i,j,x,y,&iv[i2*n[0]+i1],f2,FUNC);
                }
        }
        sf_eno2_close(map);
}
