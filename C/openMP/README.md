# Estudo sobre paralelização com openmp

[Curso no Youtube](https://www.youtube.com/watch?v=nE-xN4Bf8XI&list=PLLX-Q6B8xqZ8n8bwjGdzBJ25X2utwnoEG&index=2)

[Deburação multithread com GDB](https://sourceware.org/gdb/onlinedocs/gdb/Threads.html)

### Funções do openmp

Para controlar o número de threads utilizadas pelo programa utilize
a variável de ambiente OMP_NUM_THREADS:

```sh
export OMP_NUM_THREADS=4
```

Ou utilize a função 'omp_set_num_threads' abaixo:

```c
omp_set_num_threads(4); // Setar utilização de 4 threads
```

A seguir, uma lista de funções básicas do openmp:

```c
int omp_get_num_threads(); // Obter número de threads

int omp_get_thread_num(); // Obter id da thread atual

double omp_get_wtime(); // Obter tempo em segundos
```

### Exemplo de uso genérico

Cria uma região paralela e cada thread chama a função func:

```c
float A[1000];
omp_set_num_threads(4);

int main(void){

#pragma omp parallel
{
	int id=omp_get_thread_num();
	func(id,A);
}

printf("all done!\n");
}
