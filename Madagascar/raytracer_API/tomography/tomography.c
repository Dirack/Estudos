/*
	 tomography.c (c)
	 
	 Purpose: 'Mvfsacrsnh.c' library for raytracing and traveltime
	 calculation.
	 	 
	 Version 1.0
	 
	 Site: https://dirack.github.io
	 
	 Programmer: Rodolfo A. C. Neves (Dirack) 19/09/2019

	 Email:  rodolfo_profissional@hotmail.com

	 License: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

*/

#include <math.h>
#include <stdlib.h>
#include <stdbool.h>
#include <rsf.h>
#include "raytrace.h"
#include "tomography.h"

#define NR 10
#define NT 5000
#define DT 0.001
#ifndef GDB_DEBUG
	#define DSLOW 0.04
	#define DANGLE 1.0
#else
	#define DSSLOW 0.04
	#define DANGLE 1.0
#endif
/*^*/

float creTimeApproximation(float h, // Half-offset
			 float m, // CMP
			 float v0, // Near surface velocity
			 float t0, // Normal ray traveltime
			 float m0, // Central CMP
			 float RNIP, // CRE parameter
			 float BETA, // CRE parameter
			 bool cds // Use CDS condition?
			 )
/*< Calculate CRE traveltime approximation t(m,h)
Note: If cds parameter is false, it uses the CRE formula to calculate traveltime.
If cds parameter is true, it uses the non-hyperbolic CRS formula with CDS condition (RN=RNIP)
to calculate traveltime.
>*/
{ 
	float alpha; // Asymmetry parameter
	float d = m-m0; // Distance to central CMP m0
	float c1; // CRE coefficient
	float c2; // CRE coefficient
	float a1, a2, b2, b1, Fd, Fd1, Fd2; // Non-hyperbolic CRS coefficient
	float t; // traveltime t(m,h)

	if(!cds){
		c1 = (d+h)/RNIP;
		c2 = (d-h)/RNIP;
		alpha = sin(BETA)/RNIP;
		t = (t0-2*RNIP/v0)+(RNIP/v0)*sqrt(1-2*alpha*(d+h)+c1*c1)+(RNIP/v0)*sqrt(1-2*alpha*(d-h)+c2*c2);
	}else{

		a1=(2*sin(BETA))/(v0);
		a2=(2*cos(BETA)*cos(BETA)*t0)/(v0*RNIP);
		b2=(2*cos(BETA)*cos(BETA)*t0)/(v0*RNIP);
		b1=2*b2+a1*a1-a2;
		Fd=(t0+a1*d)*(t0+a1*d)+a2*d*d;
		Fd2=(t0+a1*(d-h))*(t0+a1*(d-h))+a2*(d-h)*(d-h);
		Fd1=(t0+a1*(d+h))*(t0+a1*(d+h))+a2*(d+h)*(d+h);
		t=sqrt((Fd+b1*h*h+sqrt(Fd2*Fd1))*0.5);
	}
	return t;
}

float calculateTimeMissfit(float** s, /* NIP sources matrix (z,x) pairs */
			   float v0, /* Near surface velocity */
			   float* t0, /* Normal ray traveltime for each NIP source */
			   float* m0, /* Central CMP for each NIP source */
			   float* RNIP, /* RNIP parameter for each NIP source */
			   float* BETA, /* BETA parameter for each NIP source */
			   int *n, /* Velocity model dimension n1=n[0] n2=n[1] */
			   float *o, /* Velocity model axis origin o1=o[0] o2=o[1] */
			   float *d, /* Velocity model sampling d1=d[0] d2=d[1] */
			   float *slow, /* Slowness velociy model */
			   float *a, /* Normal ray angle for each NIP source (degrees) */
			   int ns, /* Number of NIP sources */
			   int itf /* Interface being inverted */)
/*< Return L2 norm of the time misfit: The time misfit is the difference
between the traveltime calculated using raytracing and the traveltime calculated
with the CRE traveltime formula 

Note: This function traces nr reflection rays from each NIP source
(a depth point coordinate) to acquisition surface. NIP sources coordinates
are passed through s matrix. This function returns the L2 norm of the difference
between the traveltime of the reflection rays and the calculated traveltime using CRE
traveltime approximation. This difference is time misfit.

To simulate a reflection ray, this function traces a ray from the NIP source to the
source location in the acquisition surface and it stores its traveltime ts. And this
function traces a ray from the NIP source to the receiver location in the acquisition
surface and it stores the traveltime tr. The total reflection ray traveltime will be the
sum of t=ts+tr.
 >*/
{

	float currentRayAngle; // Emergence angle from source (radians)
	int i, ir, it, is; // loop counters
	float p[2]; // slowness vector
	float t; // Ray traveltime
	float nrdeg; // Normal ray angle in degrees
	int nt=NT; // number of time samples in each ray
	int nr=NR; // number of reflection ray pairs for each source
	float dt=DT; // time sampling of rays
	raytrace rt; // raytrace struct
	float** traj; // Ray trajectory (z,x)
	float m; // CMP
	float h; // half-offset
	float tmis=0; // time misfit
	float xs; // Source position
	float xr; // Receiver position
	float tr; // NIP to receiver ray traveltime
	float ts; // NIP to source ray traveltime
	float *x; // Source position (z,x)

	x = sf_floatalloc(2);

	for(is=(itf*ns);is<(itf*ns+ns);is++){

		x[0]=s[is][0];
		x[1]=s[is][1];
		nrdeg = a[is];

		for(ir=0;ir<nr;ir++){

			for(i=0; i<2; i++){

				/* initialize ray tracing object */
				rt = raytrace_init(2,true,nt,dt,n,o,d,slow,ORDER);

				traj = sf_floatalloc2(2,nt+1);
				
				/* initialize ray direction */
				if(i==0){
					// NIP to source ray
					currentRayAngle=(nrdeg-(ir+1)*DANGLE)*DEG2RAD;
				}else{
					// NIP to receiver ray
					currentRayAngle=(nrdeg+(ir+1)*DANGLE)*DEG2RAD;
				}

				p[0] = -cosf(currentRayAngle);
				p[1] = sinf(currentRayAngle);

				/* Ray tracing */
				it = trace_ray (rt, x, p, traj);

				if(it>0){ // Ray endpoint at acquisition surface
					t = it*dt;
					if(i==0){ // Keep NIP to source ray traveltime
						ts=t;
						xs=x[1];
					}else{ // Keep NIP to receiver ray traveltime
						tr=t;
						xr=x[1];
					}
				}else if(it == 0){ // Ray endpoint inside model
					t = abs(nt)*dt;
					nt += 1000;
				}else{ // Side or bottom ray
					/* TODO to correct the way you treat side rays */
					sf_warning("Ray endpoint => x=%f y=%f p[0]=%f p[1]=%f",x[1],x[0],p[0],p[1]);
					sf_warning("Ray starting point=> x=%f y=%f",s[1],s[0]);
					sf_warning("Ray traveltime => t=%f",t);
					sf_error("Bad ray angle, ray get to the model side/bottom");
				}

				/* Raytrace close */
				raytrace_close(rt);
				free(traj);

				x[0] = s[is][0];
				x[1] = s[is][1];
			} /* Loop over source-NIP-receiver rays */

			m = (xr+xs)/2.;
			h = (xr-xs)/2.;
			t = creTimeApproximation(h,m,v0,t0[is],m0[is],RNIP[is],BETA[is],true);
			tmis += fabs((ts+tr)-t);

		} /* Loop over reflection rays */

	} /* Loop over NIP sources */

	/* L2 norm to evaluate the time misfit */
	tmis = sqrt(tmis*tmis);
	return tmis;
}

