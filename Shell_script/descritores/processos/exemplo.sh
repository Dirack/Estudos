#!/bin/bash
#
# exemplo.sh (Shell Script)
# 
# Objetivo: Estudo sobre descritores de arquivos e processos (Avançado).
# 
# Tutorial: https://guialinux.uniriotec.br/arquivo/
#
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 01/05/2021
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

# Exibir os PID's dos processos
# O primeiro é o terminal e o segundo é o script
ps

echo

# Guardar o PID do script atual
# TODO: Procurar um jeito melhor de fazer isto
PID=$(ps)

PID=$(echo $PID | cut -d" " -f9)

# Exibir os descritores de arquivo do script
ls -l /proc/$PID/fd
