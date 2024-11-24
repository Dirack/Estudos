# NextJS 14

Next.js é um framework full-stack de reactjs e uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel
que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.
É uma estrutura pronta para produção que permite que os desenvolvedores criem
rapidamente sites JAMstack estáticos e dinâmicos e é amplamente usada por muitas grandes empresas.

O padrão dos componentes no Next é React Sever Component (RSC - Renderizado no servidor). Para transformar o componente em React Client Component
(RCC - Renderizado no cliente) se utiliza
"use client" no topo do arquivo fonte do componente.

A diretiva use client do Next.js é uma convenção que declara que os componentes serão renderizados no cliente. Ela deve ser colocada no topo dos arquivos que contêm interações no cliente. 
A diretiva use client é usada para estabelecer uma fronteira entre os módulos de Componentes do Cliente e do Servidor. Quando definida em um arquivo,
todos os módulos importados nele, incluindo os componentes filho, são considerados parte do bundle do cliente. 
É importante saber que nem todos os arquivos precisam ter essa diretiva declarada. Por exemplo, se apenas um componente
da página precisa de interatividade, então só ele precisa receber a diretiva do use-client

## Índice

- [Criando rotas no nextjs](https://github.com/Dirack/Estudos/tree/master/react/nextjs14/criando_rotas#criando-rotas-no-nextjs)
- [Exemplo de rotas dinâmicas em nextjs](https://github.com/Dirack/Estudos/tree/master/react/nextjs14/rotas_dinamicas#exemplo-de-rotas-din%C3%A2micas-em-nextjs14)
- [Consultar dados de rotas dinâmicas em nextjs](https://github.com/Dirack/Estudos/tree/master/react/nextjs14/consultando_rotas_dinamicas#consultar-dados-de-rotas-din%C3%A2micas-em-nextjs)
- [Modificar o head dinâmicamente em nextjs](https://github.com/Dirack/Estudos/tree/master/react/nextjs14/generateMetadata#modificar-o-head-din%C3%A2micamente-em-nextjs)
- [Rotas dinamicamente estáticas em nextjs](https://github.com/Dirack/Estudos/tree/master/react/nextjs14/dinamicamente_statics#rotas-dinamicamente-est%C3%A1ticas-em-nextjs)
- [Mudar de rotas no nextjs](https://github.com/Dirack/Estudos/tree/master/react/nextjs14/mudar_rota#mudar-de-rotas-no-nextjs)
- [Exibir mensagem de erro na rota no next](https://github.com/Dirack/Estudos/tree/master/react/nextjs14/erro_na_rota#exibir-mensagem-de-erro-na-rota-no-next)
- [O componente image do next](https://github.com/Dirack/Estudos/tree/master/react/nextjs14/componente_image#o-componente-image-do-next)
- [Exemplo de middleware no nextjs [Não está funcionando ainda!]](https://github.com/Dirack/Estudos/tree/master/react/nextjs14/middleware#exemplo-de-middleware-no-nextjs)
- [Estudo sobre server actions no nextjs](https://github.com/Dirack/Estudos/tree/master/react/nextjs14/server_actions#estudo-sobre-server-actions-no-nextjs)
- [Estudo sobre server actions de formulário](https://github.com/Dirack/Estudos/tree/master/react/nextjs14/server_actions_form#estudo-sobre-server-actions-de-formul%C3%A1rio)
