Hoje também existe pathlib

Você provavelmente vai encontrar código moderno usando:

from pathlib import Path

files = list(Path("data").glob("*.csv"))

E recursivamente:

files = list(Path("data").rglob("*.csv"))

Conceitualmente:

glob.glob("data/**/*.csv", recursive=True)
              ≈
Path("data").rglob("*.csv")