# Manipulando o layout do bash alterando a variável PS1

> A variável de sistema PS1 armazena o layout do prompt do bash.
> Basta alterá-la no seu arquivo $HOME/.bashrc

A lista de alguns parâmetros que você pode colocar é a seguinte:

    \d - a data no formato "Dia Mês Data" (ex. Tue May 26)
    \h - o seu hostname sem o grupo de trabalho
    \H - o seu hostname com o grupo de trabalho
    \s - o nome do shell
    \t - as horas no formato (24-horas) HH:MM:SS
    \T - as horas no formato (12-horas) HH:MM:SS
    \A - as horas no formato (24-horas) HH:MM
    \u - o usuário que está usando o shell
    \v - a versão do bash (ex. 3.01)
    \V - a versão + patch do bash (ex. 3.01.1)
    \w - o caminho completo do diretório atual
    \W - apenas o nome do diretório atual
    \$ - o simbolo # (caso root) ou $ (outros usuários) 

Você pode utilizar a saída de algum comando do shell para PS1. Exemplo,
formatando a data a partir do comando date:

´´´shell
PS1="$(date +%d/%m/%Y)$" #data no formato DD/MM/AAAA
´´´

Você também pode colocar cores no seu shell seguindo a mesma lógica do comando echo -e. 
Para adicionar uma cor, digite:

'\e[FUNDO;ATTR;CORm \e[m'

ATTR (atributos da letra):

    00 - Nenhum
    01 - Negrito
    04 - Sublinhado
    05 - Piscar
    07 - Inversa (Troca cor da letra por cor de fundo da letra e vice-versa)
    08 - Oculta 


COR (a cor da letra):

    30 - Preto
    31 - Vermelho
    32 - Verde
    33 - Amarelo
    34 - Azul
    35 - Rosa
    36 - Azul Claro
    37 - Branco 


FUNDO (cor de fundo da letra):

    40 - Preto
    41 - Vermelho
    42 - Verde
    43 - Amarelo
    44 - Azul
    45 - Rosa
    47 - Azul Claro
    48 - Branco

Aqui vai o exemplo da minha variável PS1 atual:

´´´shell
 PS1="\033[32m[\033[m\033[31m\u\033[m\033[32m]\033[m\033[33m@\033[m\033[32m[\033[m$(date +%d/%m/%Y) às \t\033[32m]\033[m\033[34m: \w\033[m \n\033[00;01;39m~> \033[m"
´´´
