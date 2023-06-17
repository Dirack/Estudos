# ReactJS

> Estudos sobre a biblioteca ReactJS

ReactJS é uma biblioteca leve de JavaScript que utiliza o virtual Document Object Model (DOM).
Foi criada e é mantida pelo Facebook.

O React utiliza o conceito de [Single Page Application (SPA)](https://github.com/Dirack/Estudos/tree/master/react#oque-%C3%A9-spa).

Os arquivos escritos em JSX são transpilados pelo Babel para código JavaScript para o navegador. Isto é
feito para facilitar a criação de componente react com código HTML ao invés de vários elementos react.

## Índice

* [Listas e estilização](https://github.com/Dirack/Estudos/tree/master/react/estilizacao#listas-e-estiliza%C3%A7%C3%A3o)

## Criando projeto ReactJS com Create React App (CRA)

Use o seguinte comando:

```
npx create-react-app nomeDoProjeto --template typescript
```

Para rodar utilize:

```
npm start
```

## Criando projeto ReactJS com vite

Use o seguinte comando:

```
npm init vite nomeDoProjeto -- --template react-ts
```

Para rodar utilize:

```
npm run dev
```

## Oque é SPA?

Uma SPA é uma aplicação que carrega apenas um único documento web e, em seguida, atualiza o conteúdo desse documento
único por meio de APIs JavaScript. No primeiro acesso, todo conteúdo é transferido para o cliente.
