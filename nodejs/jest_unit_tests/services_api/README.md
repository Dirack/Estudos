# Exemplo testes com Jest e nodejs

## Quick start

A conexão e os detalhes de conexão estão no arquivo '.env' deste repositório. Você pode verificar este arquivo para encontrar as variáveis utilizadas para conexão, como senha, database utilizado e etc. Você pode editar estas variáveis de acordo com os valores requeridos para conexão no seu banco.

A forma mais simples de utilizar este exemplo é criando um database 'Estudos' no PHPmyadmin e importar o arquivo 'usuarios.sql' deste repositório. Este arquivo tem a tabela com os dados
utilizados. __Impotante!__ esta tabela será dropada e os dados serão perdidos e reinseridos durante os testes, não colocar dados importantes nesta tabela de testes!

Este exemplo possui 3 testes:

- [Math.test.ts](https://github.com/Dirack/Estudos/blob/master/nodejs/jest_unit_tests/services_api/src/libs/Math.test.ts) - Teste de biblioteca de funções matemáticas
- [api.test.ts](https://github.com/Dirack/Estudos/blob/master/nodejs/jest_unit_tests/services_api/src/routes/api.test.ts) - Teste dos endpoints da API
- [UserService.test.ts](https://github.com/Dirack/Estudos/blob/master/nodejs/jest_unit_tests/services_api/src/services/UserService.test.ts) - Teste para os services do banco de dados MySQL

## Tutorial de configuração do jest

Confira o exemplo inicial de [configuração de testes com jest](https://github.com/Dirack/Estudos/tree/master/nodejs/jest_unit_tests/jest_config#exemplo-testes-com-jest-e-nodejs).
Para rodar os testes basta rodar:

```
npm test
```
