from multiprocessing import Process
import os


def tarefa():
    print("Executando processo filho")
    print("PID filho:", os.getpid())


if __name__ == "__main__":
    print("PID principal:", os.getpid())

    p = Process(target=tarefa)

    p.start()
    p.join()

    print("Fim do programa")