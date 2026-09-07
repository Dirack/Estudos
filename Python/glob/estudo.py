import glob

files = glob.glob("**/*.txt", recursive=True)

print(files)