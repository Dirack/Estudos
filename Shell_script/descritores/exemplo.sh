#!/bin/bash
#
# exemplo.sh (Shell Script)
# 
# Objetivo: Exemplo criando descritor de arquivos.
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

# Associar a stdin o arquivo file.txt
exec 0<file.txt

# Associar a stdin ao descritor 6
exec 6<&0

# Usar o descritor 6 para entrada do comando cat
cat <&6

# Fechar descritor 6
6<&-

echo "Mensagem para stdout" >&1

echo "Mensagem para stderr" >&2
