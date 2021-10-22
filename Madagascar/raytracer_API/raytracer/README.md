# Program raytrace.c documentation

## Macro definition

DEG2RAD is a macro to degrees to radian conversion

ORDER is the order of eno interpolation (?)

## Abstract Data Type (ADT)

The main struct in the program is RayTrace, that is the raytrace object with the grid object inside grd2 (2D grid).

```c
typedef struct RayTrace* raytrace;
/* abstract data type */
/*^*/

#endif

struct RayTrace {
	bool sym; // if symplectic
	int dim; // Grid dimension 2D, 3D
	int nt; // Ray samples in time
	float dt, z0;
	grid2 grd2;
};
/* concrete data type */
```

## Functions

### iso\_rhs

right-hand side for isotropic raytracing (?)

### term

Function to verify if the ray is outside the grid. It is just a wrapper function to grid2\_term function that will check if the current ray location
is outside the grid.

### raytrace\_init

Function to initialize raytrace object.

```c
raytrace raytrace_init(int dim            /* dimensionality (2 or 3) */, 
					   bool sym,          /* if symplectic */
					   int nt             /* number of ray tracing steps */, 
					   float dt           /* ray tracing step (in time) */,
					   int* n             /* slowness dimensions [dim] */, 
					   float* o, float* d /* slowness grid [dim] */,
					   float* slow2       /* slowness squared [n3*n2*n1] */, 
					   int order          /* interpolation order */)
```

It is just a function wrapper to grid2\_init function that initialize the grid. It allocates memory for the raytrace object and after that
it calls grid2\_init function to initialize grid.

### raytrace\_close

Function to free memory allocated for raytrace object. It is just a wrapper function to grid2\_close function that will deallocate grid. After that, the function free raytrace object storage.

### trace\_ray

```c
int trace_ray (raytrace rt  /* ray tracing object */,
               float* x     /* point location {z,y,x} [dim] */,
               float* p     /* ray parameter vector [dim] */,
               float** traj /* output ray trajectory [nt+1,dim] */)
```


Trace a ray.
 * Values of x and p are changed inside the function.
 * The trajectory traj is stored as follows:
 {z0,y0,z1,y1,z2,y2,...} in 2-D
 {z0,y0,x0,z1,y1,x1,...} in 3-D
 * Vector p points in the direction of the ray. 
 The length of the vector is not important.
 Example initialization:
   - p[0] = cos(a); p[1] = sin(a) in 2-D, a is between 0 and 2\*pi radians
   - p[0] = cos(b); p[1] = sin(b)\*cos(a); p[2] = sin(b)\*sin(a) in 3-D
   - b is inclination between 0 and   pi radians a is azimuth between 0 and 2\*pi radians
 * The output code for it = trace\_ray(...)
   - it=0 - ray traced to the end without leaving the grid
   - it>0 - ray exited at the top of the grid
   - it<0 - ray exited at the side or bottom of the grid
 * The total traveltime along the ray is nt\*dt if (it = 0); abs(it)\*dt otherwise 

