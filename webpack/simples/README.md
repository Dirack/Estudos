# Instalação e uso simples

Para rodar este exemplo de uso, primeiro fazemos a instalação dos módulos do node:

```
npm install
```

Depois basta chamar o script de build definido no arquivo 'package.json:

```
npm run build
```

# Tutorial para utilização do webpack em um projeto simples

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

Para utilizar CSS você precisará instalar os loaders de CSS do webpack:

```
npm install style-loader css-loader --save-dev
```

Para o carregamento de arquivos de imagens no webpack você precisará instalar o loader de files do webpack:

```
npm install file-loader --save-dev
```

# Arquivo de configuração webpack.config.js

A configuração básica do webpack pode ser feita no arquivo 'webpack.config.js'. Para executar o webpack com arquivo de configuração:

```
npx webpack --config webpack.config.js
```

Podemos criar um [comando de build](https://github.com/Dirack/Estudos/blob/c171855f88fbceade730a9e554eb2a3f367d105d/webpack/simples/package.json#L9)
no arquivo 'package.json' para iniciar comando acima com o node. Daí basta rodar com:

```
npm run build
```

A seguir, algumas configurações básicas:

- [Definir entrada e saída](https://github.com/Dirack/Estudos/blob/c171855f88fbceade730a9e554eb2a3f367d105d/webpack/simples/webpack.config.js#L4) - Em entry e output você consegue definir os arquivos de entrada e de saída no webpack
- [Configurar o mode](https://github.com/Dirack/Estudos/blob/c171855f88fbceade730a9e554eb2a3f367d105d/webpack/simples/webpack.config.js#L9) - Configurar para modo de produção ou desenvolvimento
- [CSS e File Loader rules](https://github.com/Dirack/Estudos/blob/c171855f88fbceade730a9e554eb2a3f367d105d/webpack/simples/webpack.config.js#L11) - Configurar as regras para utilização dos loaders de CSS e de Files. Configurar onde o webpack irá procurar os arquivos e qual loader irá utilizar
