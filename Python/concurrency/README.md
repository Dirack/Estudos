# Concurrency em python

Concurrency in Python allows multiple tasks to be executed simultaneously using different approaches. GIL (Global Interpreter Lock) limits thread execution, making multithreading less efficient for computational tasks, but suitable for I/O. Multiprocessing, using the multiprocessing module, allows multiple cores to be utilized, providing true parallelism. Asynchrony via asyncio is optimal for I/O operations, allowing thousands of connections to be processed simultaneously without blocking. The choice of approach depends on the nature of the task.

##O que é o GIL?

Python possui threads reais do sistema operacional, mas no CPython tradicional essas threads não executam bytecode Python em paralelo devido ao GIL. Elas são excelentes para concorrência de I/O, mas não para acelerar cálculos pesados de CPU.

GIL is a mechanism that allows only one thread to execute Python code at a time. This limitation is related to memory management in CPython and can reduce the efficiency of multithreaded applications on multi-core systems.

GIL significa:

Global Interpreter Lock

É um mecanismo interno do interpretador CPython.

A regra simplificada é:

Apenas uma thread pode executar bytecode Python por vez.

O que isso significa?

Imagine:

def trabalho():
    for i in range(1_000_000):
        pass

Agora duas threads:

t1.start()
t2.start()

Você imagina:

CPU Core 1 -> Thread 1
CPU Core 2 -> Thread 2

Mas o GIL faz algo mais parecido com:

Thread 1 executa
↓
Thread 2 executa
↓
Thread 1 executa
↓
Thread 2 executa

Elas ficam revezando o acesso ao interpretador.

Por que o GIL existe?

Principalmente por simplicidade e segurança.

Considere:

lista = []

Duas threads:

lista.append(1)
lista.append(2)

Sem algum mecanismo de proteção, a memória poderia ser corrompida.

O GIL simplifica muito a implementação interna do Python.
