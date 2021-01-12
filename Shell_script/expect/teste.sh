#!/bin/bash
#
# teste.sh (Shell Script)
# 
# Objetivo: Exemplo de script testado com o programa expect.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 12/01/2021
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

read -p "Digite seu nome: " NOME

echo "O nome digitado é $NOME"

read -p "Qual a sua idade, $NOME? " IDADE

echo "Sua idade é $IDADE"
