# coding: utf-8
#
# classeAnimal.py (Python)
# 
# Objetivo: Exemplo de pacotes em python. Importando uma classe.
# 
# Versão 1.0
# 
# Site: http://www.dirackslounge.online
# 
# Programador: Rodolfo A. C. Neves (Dirack) 03/07/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: Software de uso livre e código aberto.

class Cachorro:
	"""
	Classe Cachorro
	nome
	idade
	"""
	def __init__(self, nome, idade):
		"""
		Construtor da classe Cachorro
		"""
		self.nome=nome
		self.idade=idade
	
	def latir(self):
		print("Au Au!")

	def mostrarNome(self):
		print(self.nome)

	def mostrarIdade(self):
		print(self.idade)
