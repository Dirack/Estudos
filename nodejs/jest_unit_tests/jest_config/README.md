# Exemplo testes com Jest e nodejs

## Tutorial de configuração do jest

Basta instalar o jest e os types:

```
npm install -D jest ts-jest @types/jest
```

Para configurar o jest e gerar o arquivo 'jest.config.js':

```
npx ts-jest config.init
```

Aí configuramos [o openhandles para permitir testes assíncronos](https://github.com/Dirack/Estudos/blob/076a32710919fc795418978716f84599b3254103/nodejs/jest_unit_tests/jest_config/jest.config.js#L5).
E em seguida alteramos [o script de test](https://github.com/Dirack/Estudos/blob/076a32710919fc795418978716f84599b3254103/nodejs/jest_unit_tests/jest_config/package.json#L7) no arquivo 'package.json'.

Para rodar os testes basta rodar:

```
npm test
```
