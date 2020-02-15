# coding: utf-8
#
# spectro.py (Python)
# 
# Objetivo: Estudo sobre execução de comandos ddo shell com python.
# 
# Site: http://www.dirackslounge.online
# 
# Versão 1.0
# 
# Programador: Rodolfo Dirack 14/02/2020
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.

import os
import commands as cs

# Executar comando shell com python
var = os.system("echo olá shell!")
# Retorna 0 para var se a execução foi bem sucedida, se não retorna diferente de 0
print(var)

# Retorna a saída do comando para var
var=cs.getoutput("ls")
print(var)

