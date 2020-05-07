#!/bin/bash
#
# exemplo.sh (Shell Script)
# 
# Objetivo: Estudo sobre o comando trap para manipulação de sinais de processos.
# Este processo irá rodar até ser teclado Ctrl+Z. O comando trap muda a resposta ao sinal
# SIGINT, enviado quando teclado Ctrl+C.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 06/05/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

trap "echo Booh!" SIGINT SIGTERM
echo "it's going to run until you hit Ctrl+Z"
echo "hit Ctrl+C to be blown away!"

while true        
do
    sleep 60       
done

