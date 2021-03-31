#!/bin/bash
#
# exemplo.sh (Shell Script)
# 
# Objetivo: Exemplo simples de barra 
# de progresso com dialog monitorando o comando find.
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

echo 0
find $HOME -name "*.TXT" -exec cp -f {} backup/ \;
echo 100
sleep 2
