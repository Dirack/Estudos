typedef struct PONTO ponto;

ponto* pto_init(float x, float y);

void pto_delete(ponto* p);
void pto_getvalues(ponto* p, float* x, float* y);
void pto_assignvalues(ponto* p, float x, float y);
float pto_distance(ponto* p1, ponto* p2);
