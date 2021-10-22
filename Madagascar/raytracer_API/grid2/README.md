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

### grid2\_term

```c
int grid2_term (void* par /* grid */, 
		float* xy /* location [2] */)
/*< Termination criterion. returns 0 if xy (data coordinates)
  are inside the grid >*/
 ```
