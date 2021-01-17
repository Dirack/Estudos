#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int int_cmp(const void* p1, const void* p2)
{
    int x1 = *(int*)p1;
    int x2 = *(int*)p2;
    if (x1 > x2)
        return 1;
    if (x1 < x2)
        return -1;
    return 0;
}

int double_cmp(const void* p1, const void* p2)
{
    double x1 = *(double*)p1;
    double x2 = *(double*)p2;
    if (x1 > x2)
        return 1;
    if (x1 < x2)
        return -1;
    return 0;
}

int void_strcmp(const void* p1, const void* p2)
{
    // Sim, para ordenar do menos ao maior,
    // pegue o resultado do strcmp e troque o sinal
    return -strcmp(p1, p2);
}

int main()
{
    int vet[4] = { 4, 3, 2, 1};
    qsort(vet, 4, sizeof(int), int_cmp);
    // vet[4] = { 1, 2, 3, 4 }

    double vetd[4] = { 4.1, 5.1, 2.1, 1.1 };
    qsort(vetd, 4, sizeof(double), double_cmp);
    // vetd[4] = { 1.1, 2.1, 4.1, 5.1 }

    char* vetstr[3] = { "silvia", "pedro", "matheus" };
    qsort(vetstr, 3, sizeof(char*), void_strcmp);

    return 0;
}
