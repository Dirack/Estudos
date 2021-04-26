#!/bin/bash
#
# configure.sh (Shell Script)
# 
# Objetivo: Gerar cabeçalho (header) RSF do binário 'small-mig-good.data'
# e fazer a instalação deste binário no DATAPATH.
# 
# Site: https://dirack.github.io
# 
# Versão 1.0
# 
# Programador: Rodolfo A C Neves (Dirack) 26/04/2021
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

FILE=small-mig-good.data # Nome do binário original
RSFFILE=${FILE/.data/.rsf} # Nome do arquivo RSF

# Dimensões
n1=51
n2=51
n3=51

# Gerar um RSF com as mesmas dimensões do binário
sfspike n1=$n1 n2=$n2 n3=$n3 > $RSFFILE

# Guardar o DATAPATH do binário do arquivo RSF gerado acima
BINFILEPATH=$(< $RSFFILE sfget "in" parform=n)

# Trocar o binário gerado pelo binário original no DATAPATH
cp original/$FILE $BINFILEPATH

# Visualizar
<$RSFFILE sfbyte | sfgrey3 movie=3 flat=n | sfpen
