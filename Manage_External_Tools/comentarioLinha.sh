#!/bin/bash
#
# comentarioLinha.sh (Shell Script)
# 
# Objetivo: Script a ser adicionado ao 'Manage External Tools' do gedit. 
# Adiciona comentário de uma linha ao arquivo, a depender da linguagem.
# 
# Versão 1.0
# 
# Site: http://www.dirackslounge.online
# 
# Programador: Rodolfo A. C. Neves (Dirack) 17/02/2019
# 
# Email: rodolfo_profissional@hotmail.com
# 
# Licença: Software de uso livre e código aberto.

# Linguagem do arquivo (Shell script, HTML, Etc...)
LINGUAGEM="$GEDIT_CURRRENT_DOCUMENT_LANGUAGE"

# A partir da linguagem, selecione o caractere de comentário
# a ser adicionado
case "$LINGUAGEM" in

	sh)	## comentário shell script

		echo -e "# "

	;;

	html)	## comentário HTML

		echo "<!-- -->"
	;;

	*) 	## Opção não disponível
		
		echo "Não há opção disponível para a linguagem $LINGUAGEM"
	;;
		
esac

exit 0
