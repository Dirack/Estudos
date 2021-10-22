# Program grid2.c documentation

2-D velocity grid for ray tracing

## Abstract Data Type (ADT)

```c
typedef struct Grid2* grid2;
/* abstract data type */
/*^*/

#endif

struct Grid2 {
    sf_eno2 pnt;
    float ***vel;
    int n1, n2;
    float o1, d1, o2, d2;
};
/* concrete data type */
```

## Functions

### grid2\_init

```c
grid2 grid2_init (int n1, float o1, float d1 /* first axis */, 
		  int n2, float o2, float d2 /* second axis */,
		  float *slow2               /* data values [n1*n2] */, 
		  int order                  /* interpolation order */)
/*< Initialize grid object >*/
```

Initialize the grid object (2D velocity/Slowness model). It uses eno interpolation to interpolate grid values stored in grd->pnt (sf_eno2 pnt in grd struct).

### grid2\_vel

Extract a value from the grid

```c
float grid2_vel(void* par /* grid */, 
		float* xy /* coordinate [2] */)
/*<  Extract a value from the grid >*/
```

The grid is the slowness interpolated using eno interpolation. So, this function apply the eno interpolation for a (x,y) coordinate and
returns the value of the velocity for this point.

```c
sf_eno2_apply(grd->pnt, i, j, x, y, &f, f1, FUNC);
```

### grid2\_vgrad

Extract (1/2 of) gradient values from the grid.
It is a wrapper function to sf_eno2_apply that extracts a value from the slowness grid for a (x,y) coordinate.

```c
sf_eno2_apply(grd->pnt, i, j, x, y, &f, f1, DER);
```

### grid2\_term

```c
int grid2_term (void* par /* grid */, 
		float* xy /* location [2] */)
/*< Termination criterion. returns 0 if xy (data coordinates)
  are inside the grid >*/
 ```

### grid2\_close

This function free internal storage. Its is just a wrapper function to sf_eno2_close function that frees the sf_eno2 struct.
