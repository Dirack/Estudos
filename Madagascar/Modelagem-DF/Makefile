# Makefile
#
# Objetivo: Rodar o SConstruct na pasta atual.
# 
# IMPORTANTE: Depende do pacote MADAGASCAR instalado para funcionar!
#
#	      -MADAGASCAR é um pacote open source de processamento sísmico (http://www.ahay.org/wiki/Main_Page)
# 
# Site: http://www.dirackslouge.online
#
# Versão 1.0
#
# Programador: Rodolfo A. C. Neves 05/06/2019
# 
# email (manutenção): rodolfo_profissional@hotmail.com
# 
# Licença: Software de uso livre e código aberto.

all:
	@clear
	@echo "\033[00;01mNOME\033[m"
	@echo "\tMakefile"
	@echo "\033[00;01mDESCRIÇÃO\033[m"
	@echo "\tModelagem 2D com diferenças Finitas no Madagascar"
	@echo "\033[00;01mPARÂMETROS\033[m"
	@echo "\t\033[00;01mmake\033[m Exibe esta mensagem de ajuda e sai"
	@echo "\t\033[00;01mmake run\033[m Roda o 'scons' na pasta atual"
	@echo "\t\033[00;01mmake view\033[m Roda o 'scons view' na pasta atual"
	@echo "\t\033[00;01make clean\033[m Apaga os arquivos .rsf .vpl e .asc da pasta atual"

run:
	scons

view:
	scons view

clean:
	sfrm *.rsf
	rm *.vpl
	rm *.asc
