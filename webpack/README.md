# Estudo sobre webpack

## Oque é o webpack?

Basicamente, o WebPack é um empacotador de módulos criado para agrupar arquivos JavaScript que estão sendo usados em um navegador. Uma funcionalidade importante é transformar, agrupar ou empacotar qualquer recurso. 

## Instalação do webpack

```
npm install webpack webpack-cli --save-dev
```

## Rodar o webpack

```
npx webpack
```

## Rodar o webpack com arquivo de configuração webpack.config.js e Watcher

A opção --config permite que um arquivo de configuração seja passado ao webpack (mais detalhes nos exemplos abaixo). E a opção --watch ativa o modo watcher, onde
o webpack fica monitorando as alterações nos arquivos, aí não será preciso rodar o comando de execução do webpack várias vezes.

```
webpack --config webpack.config.js --watch
```

# Índice

- [Instalação e uso simples](https://github.com/Dirack/Estudos/tree/master/webpack/simples#instala%C3%A7%C3%A3o-e-uso-simples) - Exemplo de utilização básica do webpack com jquery e npx
- [Criando componente](https://github.com/Dirack/Estudos/tree/master/webpack/componente#criando-componente) - Exemplo de criação de módulos e componentes com webpack
- [Sass e webpack](https://github.com/Dirack/Estudos/tree/master/webpack/sass#usando-sass-e-webpack) - Exemplo de integração do sass com o webpack
- [Múlltiplas entradas e saídas](https://github.com/Dirack/Estudos/tree/master/webpack/multiplas#m%C3%BAltiplas-entradas-e-sa%C3%ADdas) - Exemplo de utilização de múltiplas entradas de arquivos fonte e múltiplas saídas
