#ifndef _RUNGE_H_
#define _RUNGE_H_

float runge_kutta_step(float (*f)(float,float), /* function */
			float x0, /* current x */
			float y0, /* current y */
			float h /* step */)
/*< Runge-Kutta calculation >*/
{
	float k1, k2, k3, k4;
	float h2=h/2.0;
	float y;

	k1 = h*(*f)(x0,y0);
	k2 = h*(*f)(x0+h2,y0+k1/2.0);
	k3 = h*(*f)(x0+h2,y0+k2/2.0);
	k4 = h*(*f)(x0+h,y0+k3);

	y = y0 + (k1+2*k2+2*k3+k4)/6.0;

	return y;
}

#endif
