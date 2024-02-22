# Usando sass e webpack

Para rodar este exemplo de uso, primeiro fazemos a instalação dos módulos do node:

```
npm install
```

Depois basta chamar o script de build definido no arquivo 'package.json:

```
npm run build
```

# Tutorial para a utilização do webpack com o sass

Basta adicionar a [instalação básica dos componentes do webpack](https://github.com/Dirack/Estudos/tree/master/webpack/simples#tutorial-para-utiliza%C3%A7%C3%A3o-do-webpack-em-um-projeto-simples)
a instalação dos loaders do sass:

```
npm install sass-loader node-sass --save-dev
```

Depois é só adicionar a [regra para os arquivos sass](https://github.com/Dirack/Estudos/blob/b2648a877379ad1ea0d5bc61c464b88f428efc77/webpack/sass/webpack.config.js#L14),
onde o webpack irá procurá-los e qual loader utilizar.
