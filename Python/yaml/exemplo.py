import yaml

if __name__ == '__main__':

	stream = open("exemplo.yml","r")
	dictionary = yaml.full_load(stream)
	for key, value in dictionary.items():
		print(key+": "+str(value))
