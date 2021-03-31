#!/bin/bash
#
# exemplo.sh (Shell Script)
# 
# Objetivo: Exemplo de uso de barra de progresso 
# no dialog para monitorar a execução do comando find.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 31/03/2021
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

# Armazenar a lista de diretórios a serem pesquisados
#  pelo find em um arquivo temporário
TMP=/tmp/lista.txt

# du retorna a lista de diretórios em $HOME
du -d 1 $HOME > "$TMP"

# A última linha de $TMP é o total de bytes a serem pesquisados
TOTAL=$(tail -1 "$TMP" | tr "\t" " " | cut -d" " -f1)

# Após armazenar o total, apagar a última linha de $TMP
LINHAS=$(wc -l "$TMP" | cut -d" " -f1)
sed -i "${LINHAS}d" "$TMP"

# A $PORCENTAGEM é o status de execução a ser passado ao dialog
# $SOMA é o total de bytes já pesquisados
PORCENTAGEM="0"
SOMA="0"

# As linhas do arquivo $TMP são os diretórios a serem pesquisados
# dentro de $HOME e o número de bytes em cada diretório
while read linha
do
	# Armazena o número de bytes do diretório atual
	NUM=$(echo "$linha" | tr "\t" " " | cut -d" " -f1)

	# Armazena o diretório atual a ser pesquisado
	FILE=$(echo "$linha" | tr "\t" " " | cut -d" " -f2)

	# Pesquisa o diretório atual
	find $FILE -name "*.TXT" -exec cp -f {} backup/ \;

	# Calcula a PORCENTAGEM já pesquisada e ecoa para o dialog
	SOMA=$(echo "$SOMA+$NUM" | bc -l)
	PORCENTAGEM=$(echo "($SOMA/$TOTAL)*100" | bc -l | cut -d"." -f1)
	echo "$PORCENTAGEM"

done < "$TMP"

echo 100
