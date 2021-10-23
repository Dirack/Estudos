# Program tomography.c documentation

## Macro definition

## Function

### creTimeApproximation

Calculate CRE traveltime approximation t(m,h)

Note: If cds parameter is false, it uses the CRE formula to calculate traveltime.
If cds parameter is true, it uses the non-hyperbolic CRS formula with CDS condition (RN=RNIP)
to calculate traveltime.

### calculateTimeMissfit

This function returns L2 norm of the time misfit: The time misfit is the difference
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
