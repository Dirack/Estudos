# Tested on Python 3.11
import time
import threading
from multiprocessing import Process


def count(n):
    total = 0
    for i in range(n):
        total += i
    return total


def run_threads(n):
    t1 = threading.Thread(target=count, args=(n,))
    t2 = threading.Thread(target=count, args=(n,))
    t0 = time.perf_counter()
    t1.start()
    t2.start()
    t1.join()
    t2.join()
    return time.perf_counter() - t0


def run_processes(n):
    p1 = Process(target=count, args=(n,))
    p2 = Process(target=count, args=(n,))
    t0 = time.perf_counter()
    p1.start()
    p2.start()
    p1.join()
    p2.join()
    return time.perf_counter() - t0


if __name__ == "__main__":
    n = 50_000_000
    print(f"threads:   {run_threads(n):.3f}s")
    print(f"processes: {run_processes(n):.3f}s")
