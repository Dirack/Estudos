# NextJS

O Next.js é um framework React que permite construir sites e aplicativos web estáticos otimizados,
altamente interativos e focados na experiência do usuário. Conhecido por proporcionar a melhor experiência
para desenvolvedores na construção de aplicativos prontos para produção, com todas as funcionalidades necessárias.

Ele oferece renderização híbrida estática e de servidor, suporte a TypeScript,
empacotamento inteligente, pré-busca de rotas e muito mais, sem precisar de configurações adicionais.

Com o Next.js, você tem suporte ao SSR (Server-side rendering), SSG (Static site generation)
e CSR (Client-side rendering) em um único aplicativo. Você pode decidir o tipo de aplicativo
que deseja criar e como pretende implantar seu aplicativo para melhor atender ao seu caso de uso.

A renderização do lado do servidor (SSR) torna o Next.js adequado para aplicativos prontos para produção,
direcionadas para SEO e com configurações simples.

## Índice

## Client Side Rendering (CSR)

o Client-Side Rendering (CSR) com React, o navegador baixa uma página HTML mínima e o JavaScript necessário para a página.
O JavaScript é então usado para atualizar o DOM e renderizar a página. Quando o aplicativo é carregado pela primeira vez,
o usuário pode notar um pequeno atraso antes de poder ver a página completa, isso ocorre porque a página não é totalmente
renderizada até que todo o JavaScript seja baixado, analisado e executado.

Depois que a página é carregada pela primeira vez, navegar para outras páginas no mesmo site geralmente é mais rápido,
pois apenas os dados necessários precisam ser buscados,
e o JavaScript pode renderizar novamente partes da página sem exigir uma atualização completa da página.

No Next.js, há duas maneiras de implementar a renderização do lado do cliente:

- Usando o hook do React useEffect()dentro de suas páginas em vez dos métodos de renderização do lado do servidor ( getStaticPropse getServerSideProps).
- Usando uma biblioteca de busca de dados como SWR ou consulta TanStack para buscar dados sobre o cliente (recomendado).

## Server Side Rendering (SSR)

Renderização do lado do servidor (SSR) é uma técnica de desenvolvimento web em que o servidor
web gera o conteúdo HTML completo de uma página web antes de enviá-lo ao navegador do usuário.

Isso é diferente da renderização do lado do cliente (CSR), onde o navegador baixa uma estrutura
HTML básica e então usa JavaScript para buscar e exibir o conteúdo.

## Static Site Generation (SSG)

A geração de site estático (SSG), é uma abordagem onde as páginas são geradas como arquivos estáticos durante o build da aplicação.
Nesse modelo, as páginas já estão prontas para ser entregues ao navegador, antes mesmo de uma requisição ter sido feita.

O SSG é uma alternativa proativa e interessante para aplicações cujo conteúdo não vai ser alterado com frequência,
já que as páginas são geradas previamente e não dinamicamente.

