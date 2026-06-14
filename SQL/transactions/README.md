# Transactions

Uma transaction é um conjunto de operações SQL que deve ser executado como uma única unidade.

Ou:

Tudo acontece.
Ou nada acontece.

O banco garante que você não fique com dados inconsistentes.

Exemplo clássico

Transferência bancária:

João tem R$1000.

Maria tem R$500.

Transferir R$100 de João para Maria.

UPDATE contas
SET saldo = saldo - 100
WHERE id = 1;

UPDATE contas
SET saldo = saldo + 100
WHERE id = 2;

Imagine que o servidor caia entre os dois comandos.

Resultado:

João perdeu R$100
Maria não recebeu

Dados corrompidos.

Por isso usamos transaction:

BEGIN;

UPDATE contas
SET saldo = saldo - 100
WHERE id = 1;

UPDATE contas
SET saldo = saldo + 100
WHERE id = 2;

COMMIT;
BEGIN

Inicia uma transaction.

BEGIN;

ou em alguns bancos:

START TRANSACTION;

A partir desse momento as alterações ainda não são definitivas.

COMMIT

Confirma as alterações.

COMMIT;

Após o commit:

Os dados são gravados definitivamente.
Outros usuários conseguem vê-los.
ROLLBACK

Desfaz tudo desde o BEGIN.

ROLLBACK;

Exemplo:

BEGIN;

UPDATE funcionarios
SET salario = salario * 2;

ROLLBACK;

Resultado:

Nenhum salário foi alterado.

Fluxo típico
BEGIN;

-- operações

COMMIT;

Se der problema:

BEGIN;

-- operações

ROLLBACK;
Exemplo prático para atualização em massa

Antes de alterar dados:

BEGIN;

UPDATE clientes
SET status = 'ATIVO'
WHERE status = 'A';

Verifique:

SELECT *
FROM clientes
WHERE status = 'ATIVO';

Se estiver correto:

COMMIT;

Se perceber um erro:

ROLLBACK;

Esse é exatamente o cenário em que você comentou outro dia sobre atualizar registros sem fazer besteira.

# ACID

As propriedades ACID

Toda transaction segue os princípios ACID.

Atomicity (Atomicidade)

Tudo ou nada.

Se uma operação falhar:

UPDATE A;
UPDATE B;

Nenhuma alteração é mantida.

Consistency (Consistência)

O banco mantém as regras válidas.

Exemplo:

Chaves primárias
Chaves estrangeiras
Constraints
Isolation (Isolamento)

Transactions simultâneas não devem interferir indevidamente umas nas outras.

Durability (Durabilidade)

Depois do COMMIT:

COMMIT;

Mesmo que o servidor caia, os dados permanecem gravados.

Savepoints

Permitem criar pontos intermediários.

BEGIN;

UPDATE tabela1;

SAVEPOINT ponto1;

UPDATE tabela2;

ROLLBACK TO ponto1;

COMMIT;

Resultado:

Alterações de tabela1 permanecem.
Alterações de tabela2 são desfeitas.

Muito útil em scripts grandes.