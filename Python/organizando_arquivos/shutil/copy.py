import shutil, os

os.chdir("capa")
shutil.copy("../docia.txt",".")
shutil.copy("docia.txt","capa2")

os.chdir("..")
shutil.copytree("capa","capa_backup")
