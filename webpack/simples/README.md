# Instalação e uso simples

Para começar faça a inicialização do projeto com:

```
npm init
```

Faça depois a instalação do webpack e do webpack CLI:

```
npm install webpack webpack-cli --save-dev
```

Instalação do JQuery:

```
npm install jquery
```

Para executar o webpack basta rodar:

```
npx webpack
```

npm install style-loader css-loader --save-dev

npm install file-loader --save-dev

# Arquivo de configuração webpack.config.js

A configuração básica do webpack pode ser feita no arquivo 'webpack.config.js'. Para executar o webpack com arquivo de configuração:

```
npx webpack --config webpack.config.js
```

Podemos criar um [comando de build](https://github.com/Dirack/Estudos/blob/c171855f88fbceade730a9e554eb2a3f367d105d/webpack/simples/package.json#L9)
no arquivo 'package.json' para iniciar comando acima com o node. Daí basta rodar com 'npm run build'.

A seguir, algumas configurações básicas:

- [Definir entrada e saída](https://github.com/Dirack/Estudos/blob/c171855f88fbceade730a9e554eb2a3f367d105d/webpack/simples/webpack.config.js#L4) - Em entry e output você consegue definir os arquivos de entrada e de saída no webpack
- [Configurar o mode](https://github.com/Dirack/Estudos/blob/c171855f88fbceade730a9e554eb2a3f367d105d/webpack/simples/webpack.config.js#L9) - Configurar para modo de produção ou desenvolvimento
