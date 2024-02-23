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

Aí configuramos [o openhandles para permitir testes assíncronos](https://github.com/Dirack/Estudos/blob/c5a31031e68d891e230110ecb965b47f7ce8ebae/nodejs/mod9_unit_tests/jest_config/jest.config.js#L5).
E em seguida alteramos [o script de test](https://github.com/Dirack/Estudos/blob/c5a31031e68d891e230110ecb965b47f7ce8ebae/nodejs/mod9_unit_tests/jest_config/package.json#L7) no arquivo 'package.json'.
