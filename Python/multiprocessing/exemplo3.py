from multiprocessing import Process


contador = 0


def aumentar():
    global contador

    contador += 10

    print("Filho:", contador)


if __name__ == "__main__":

    print("Antes:", contador)

    p = Process(target=aumentar)

    p.start()
    p.join()

    print("Depois:", contador)