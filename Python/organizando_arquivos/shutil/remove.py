import os, shutil

os.unlink("capa_backup/capa2/docia.txt")
os.rmdir("capa_backup/capa2")
shutil.rmtree("capa_backup")
os.unlink("capa/capa2/docia.txt")
os.unlink("capa/docia.txt")
