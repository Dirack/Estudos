# Program atela.c documentation

Symplectic Runge-Kutta ray tracing. In 'tomography.c' is passed sym variable as true to
['raytrace\_init function'](https://github.com/Dirack/Estudos/blob/cc3280ddb8f1e3579ec274a182728678477ab0a6/Madagascar/raytracer_API/tomography/tomography.c#L142).
The variable sym is a bool value of the raytrace object that informs to the 'trace_ray' function to use
[either Runge-Kutta or Sympletic Runge-Kutta integrator](https://github.com/Dirack/Estudos/blob/cc3280ddb8f1e3579ec274a182728678477ab0a6/Madagascar/raytracer_API/raytracer/raytrace.c#L167-201).
The ray tracing with sympletic Runge-Kutta is defined in the 'atela_step' function in this program.

## Function

### atela_step

Is the function for ray tracing using sympletic Runge-Kutta
