# Exemplo testes com Jest e nodejs

## Quick start

A conexão e os detalhes de conexão estão no arquivo '.env' deste repositório. Você pode verificar este arquivo para encontrar as variáveis utilizadas para conexão, como senha, database utilizado e etc. Você pode editar estas variáveis de acordo com os valores requeridos para conexão no seu banco.

A forma mais simples de utilizar este exemplo é criando um database 'Estudos' no PHPmyadmin e importar o arquivo 'usuarios.sql' deste repositório. Este arquivo tem a tabela com os dados
utilizados. __Impotante!__ esta tabela será dropada e os dados serão perdidos e reinseridos durante os testes, não colocar dados importantes nesta tabela de testes!

## Tutorial de configuração do jest

Basta instalar o jest e os types:

```
npm install -D jest ts-jest @types/jest
```

Para configurar o jest e gerar o arquivo 'jest.config.js':

```
npx ts-jest config.init
```

Aí configuramos [o openhandles para permitir testes assíncronos](https://github.com/Dirack/Estudos/blob/c5a31031e68d891e230110ecb965b47f7ce8ebae/nodejs/mod9_unit_tests/jest_config/jest.config.js#L5).
E em seguida alteramos [o script de test](https://github.com/Dirack/Estudos/blob/c5a31031e68d891e230110ecb965b47f7ce8ebae/nodejs/mod9_unit_tests/jest_config/package.json#L7) no arquivo 'package.json'.

Para rodar os testes basta rodar:

```
npm test
```
