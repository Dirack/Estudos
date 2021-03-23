# Makefile
# 
# Objetivo: Rodar o exemplo de descritores de arquivo.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 23/03/2021
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

run:
	@echo "Direciona stdout para arquivo"
	./exemplo.sh 1>out.txt
	@echo "Direciona stderr para arquivo"
	./exemplo.sh 2>err.txt
	@echo "Direciona 1 para arquivo e 2 para 1"
	./exemplo.sh 1>mesmo.txt 2>&1
	@echo "Direciona 2 e 1 para /dev/null"
	ls h &>/dev/null

clean:
	rm out.txt err.txt mesmo.txt
