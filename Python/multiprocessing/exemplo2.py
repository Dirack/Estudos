from multiprocessing import Process
import time


def trabalhador(nome):
    for i in range(5):
        print(nome, i)
        time.sleep(1)


if __name__ == "__main__":

    p1 = Process(
        target=trabalhador,
        args=("Processo A",)
    )

    p2 = Process(
        target=trabalhador,
        args=("Processo B",)
    )

    p1.start()
    p2.start()

    p1.join()
    p2.join()

    print("Todos terminaram")