#!/bin/bash
#
# exemplo.sh (Shell Script)
# 
# Objetivo: Estudo sobre o comando trap e echo -en para simular um relógio na tela do terminal.
# O comando echo -en o 'e' é para interpretar caracteres especiais como '\r' (retorno de carro)
# e o 'n' é para não permitir a quebra de linha após executar o comando echo.
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

crtl_c(){
	echo
	echo "Saindo..."
	exit 127
}

trap crtl_c SIGINT SIGTERM
while :
do
	echo -en "Tempo: $(date +%H:%M:%S)\r\r"
done
