# ReactJS

> Estudos sobre a biblioteca ReactJS

ReactJS é uma biblioteca leve de JavaScript que utiliza o 
[Virtual Document Object Model (DOM)](https://github.com/Dirack/Estudos/blob/master/react/README.md#o-que-%C3%A9-virtual-dom).
Foi criada e é mantida pelo Facebook.

O React utiliza o conceito de [Single Page Application (SPA)](https://github.com/Dirack/Estudos/tree/master/react#oque-%C3%A9-spa).

Os arquivos escritos em JSX são transpilados pelo Babel para código JavaScript para o navegador. Isto é
feito para facilitar a criação de componente react com código HTML ao invés de vários elementos react.

## Índice

* [Componentes](https://github.com/Dirack/Estudos/tree/master/react/quadrado#exemplo-react-components)
* [Componentes (Exemplo extra)](https://github.com/Dirack/Estudos/tree/master/react/quadrado2#exemplo-2-react-components)
* [Listas e estilização](https://github.com/Dirack/Estudos/tree/master/react/estilizacao#listas-e-estiliza%C3%A7%C3%A3o)
* [Renderizando listas e condicionais](https://github.com/Dirack/Estudos/tree/master/react/renderizando_listas#renderizando-listas-e-condicionais)
* [Exemplo de uso de props e children](https://github.com/Dirack/Estudos/tree/master/react/props_children#exemplo-de-uso-de-props-e-children)
* [Eventos e handlers](https://github.com/Dirack/Estudos/tree/master/react/events#estudos-sobre-eventos-em-reactjs)
* [UseState](https://github.com/Dirack/Estudos/tree/master/react/states#exemplos-de-usestate-em-reactjs)
* [UseEffect](https://github.com/Dirack/Estudos/tree/master/react/effects#exemplo-de-useeffect-em-reactjs)
* [Context API](https://github.com/Dirack/Estudos/tree/master/react/context#context-api)
* [Reducers](https://github.com/Dirack/Estudos/tree/master/react/reducers#reducers)
* [Usando APIs no reactjs](https://github.com/Dirack/Estudos/tree/master/react/usando_apis#usando-apis-no-reactjs)
* [Requisição GET com fetch then](https://github.com/Dirack/Estudos/tree/master/react/requisicoes/get_fetch_then#requisi%C3%A7%C3%A3o-get-com-fetch-then)
* [Requisição GET com fetch await](https://github.com/Dirack/Estudos/tree/master/react/requisicoes/get_fetch_await#requisi%C3%A7%C3%A3o-get-com-fetch-await)
* [Todo List Frontend: Consumo de API no ReactJS](https://github.com/Dirack/Estudos/tree/master/react/todo_list_frontend#todo-list-frontend-consumo-de-api-no-reactjs)
* [Treemap](https://github.com/Dirack/Estudos/tree/master/react/estudos_treemap#treemap)
* [Radar graph](https://github.com/Dirack/Estudos/tree/master/react/radar_graph#radar-graph)
* [NextJS 14](https://github.com/Dirack/Estudos/tree/master/react/nextjs14#nextjs-14)
* [Redux](https://github.com/Dirack/Estudos/tree/master/react/redux#redux)

## Criando projeto ReactJS com Create React App (CRA)

Use o seguinte comando:

```
npx create-react-app nomeDoProjeto --template typescript
```

Para rodar utilize:

```
npm run start
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

## Criando projeto ReactJS com Next

Use o seguinte comando:

```
npx create-next-app
```
Para rodar o projeto utilize:

```
npm run dev
```

## Oque é React Strict Mode?

Quando os componentes são encapsulados StrictMode, o React executa certas funções duas vezes para ajudar os desenvolvedores a detectar erros em seu código.

No React, o StrictMode tem um comportamento feito para garantir que seja compatível com o estado reutilizável.

Quando o StrictMode está ativo (com a tag), o React chama efeitos de atualização dupla (montar -> desmontar -> montar) para componentes recém-montados.
Isso é feito para garantir que o componente seja resiliente a ser "montado" e "desmontado" mais de uma vez.

Assim como outros comportamentos de StrictMode, o React só faz isso para compilações em modo desenvolvimento.

## Next.js: How to Disable/Enable React Strict Mode

Basta ativar ou desativar a opção no arquivo de configuração 'next.config.mjs' como abaixo:

```ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // React Strict Mode is off
}

module.exports = nextConfig
```

Caso esteja utilizando ES escope, module não estará definido. Portanto, utilize a versão abaixo do arquivo de configuração 'next.config.mjs':

```ts
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // React Strict Mode is off
};

export default nextConfig;
```

## Oque é SPA?

Uma SPA é uma aplicação que carrega apenas um único documento web e, em seguida, atualiza o conteúdo desse documento
único por meio de APIs JavaScript. No primeiro acesso, todo conteúdo é transferido para o cliente.

## O que é Virtual DOM?

Quando estamos desenvolvendo aplicações com HTML, é por meio do DOM que podemos manipular os elementos presentes nele. Porém, cada acesso ao DOM leva um pequeno tempo, e cada alteração obriga o navegador a renderizar novamente a parte da tela afetada. Então se tivermos muitas coisas para atualizar, nossa aplicação terá problemas de perfomance.

É aí que entra o Virtual DOM (VDOM). Ele é uma representação do DOM mantida em memória. Assim, quando precisamos fazer alguma alteração, ela é feita no Virtual DOM, que é bem mais rápido que o DOM. Com isso ele analisa todos os lugares que serão afetados e sincroniza com o DOM em um processo chamado Reconciliação. A vantagem disso é que essa análise permite que haja o menor número possível de acessos ao DOM, melhorando muito a performance das aplicações.

Lembrando que o Virtual DOM não é algo do navegador, e sim, um conceito implementado por bibliotecas como o React.

Por ser algo feito em memória, e não algo preso ao DOM criado pelo navegador, o Virtual DOM também permite que a gente crie páginas no servidor. Hoje em dia é comum que algumas aplicações renderizem a tela inicial no servidor para enviar um HTML pronto com os dados ao usuário, passando a impressão de que tudo já foi carregado, para só então carregar o resto da aplicação. Isso pode ser feito utilizando bibliotecas e frameworks como Angular, React e Vue. Um caso bem famoso que utiliza esta técnica é a Netflix.
