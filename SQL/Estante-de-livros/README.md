# Estante-de-livros

> Interface com banco de dados SQL para organização de estudos, tarefas e repertórios musicais

Banco de dados SQL com interface em HTML e PHP para administrar minha rotina de estudos e repertório de violão clássico.
Os dados ficam guardados em dois bancos de dados SQL: Em 'repertorio.sql' armazeno o meu repertório de violão clássico; 
e em  'estudos.sql' armazeno as minhas leituras e estudos. O objetivo é ter todo o conhecimento obtido catalogado 
e cadastrado, de modo a agendar revisões constantes e evitar o esquecimento.

## Quick start

A conexão e os detalhes de conexão são realizados pelo arquivo 'conect.php' deste repositório. Você pode
verificar este arquivo para encontrar as variáveis utilizadas para conexão, como senha, database utilizado
e etc. Você pode editar estas variáveis de acordo com os valores requeridos para conexão no seu banco.

A forma mais simples de utilizar este exemplo é criando um database 'tarefas' no PHPmyadmin e importar
os arquivos 'repertorio.sql' e 'estudos.sql' deste repositório no database.
Estes arquivos tem a tabela com os dados do repertório de violão e com os dados de estudos e leituras,
e podem ser importados diretamente no database. Daí é só importar e utilizar a interface.
