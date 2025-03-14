# Estudos sobre TailwindCSS

## Índice

- [Exercício tela de login com TailwindCSS](https://github.com/Dirack/Estudos/tree/master/tailwind/login_system#tela-de-login-com-tailwindcss)
- [Exemplo de responsividade](https://github.com/Dirack/Estudos/tree/master/tailwind/responsividade#responsividade-com-tailwindcss)
- [Display flex](https://github.com/Dirack/Estudos/tree/master/tailwind/flex#display-flex-no-tailwindcss)
- [Display grid](https://github.com/Dirack/Estudos/tree/master/tailwind/grid#display-grid)
- [Exercício tela de loading com tailwind css](https://github.com/Dirack/Estudos/tree/master/tailwind/loading#exerc%C3%ADcio-tela-de-loading-com-tailwind-css)
- [Exercício tailwindcss cartão responsivo](https://github.com/Dirack/Estudos/tree/master/tailwind/hero_card#exerc%C3%ADcio-tailwindcss-cart%C3%A3o-responsivo)
- [Exercício tabela responsiva](https://github.com/Dirack/Estudos/tree/master/tailwind/table#exerc%C3%ADcio-tabela-responsiva)
- [Hover, estados e grupos](https://github.com/Dirack/Estudos/tree/master/tailwind/hover_estados#hover-estados-e-grupos)

## Quick Start

Para testar via CDN basta adicionar na página HTML:

```
<script src="https://cdn.tailwindcss.com"></script>
```

Ou para testar com o NextJS:

```
npx create-next-app
```

Daí basta escolher o tailwindCSS nas configurações do projeto

## Tutorial básico

basico sobre cores no tailwind:

```html

<div class="text-blue-700">
Olá mundo, Tailwind
</div>

<div class="text-blue-700/50">
Olá mundo, Tailwind
</div>


<div class="text-[#50D71E]">
Olá mundo, Tailwind
</div>

<div class="border-2 border-l-green-500/40">
Olá mundo, Tailwind
</div>
```

Você pode criar atributos personalizados utilizando o extends do arquivo 'tailwind.config.ts', como no exemplo a seguir:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "vermelhao": "#990000",
      },
    },
  },
  plugins: [],
};
export default config;
```

Para ajustar espaçamentos e tamanhos

```html
<div class="bg-blue-600 w-1/3 h-36 ml-2">Div qualquer</div>
<div class="bg-blue-600 w-2/3 h-36 mx-3">Div qualquer</div>
<div class="bg-blue-600 w-full h-36 p-2">Div qualquer</div>
<div class="bg-blue-600 w-full h-screen">Div qualquer</div>
<div class="bg-blue-600 w-full min-h-1/2">Div qualquer</div>
```

Para margin e padding utilizamos m e p, respectivamente seguido das direções, um traço e o valor. As direções são dadas pelas letras:

- l (left), r (right), x (eixo x), y (eixo y), b (bottom), t (top)
- m-[100px] (Valores fixos também são possíveis)

O mesmo padrão pode ser utilizado para manipulação de texto:

```html
<div class="text-blue-600 text-center text-underline">Div qualquer</div>
<div class="text-red-200 font-bold uppercase truncate line-clamp-3">Div qualquer</div>
```

Daí basta utilizar como outra classe qualquer do tailwind:

```html
<div class="bg-vermelhao">Texto vermelhão</div>
```

Para colocar bordas
```html
<div class="border-2 border-l-green-500/40 rounded border-dotted">
Olá mundo, Tailwind
</div>

<input class="outline-4" />
```

Exemplo criando botões com tailwind:

```html
<div class="w-screen h-screen p-5">
  <div class="inline-block cursor-pointer bg-blue-500 text-white rounded-md px-5 py-3 border-none">Clique aqui</div>
  <div class="inline-block cursor-pointer text-white rounded-md px-5 py-3 border-none">Clique aqui</div>
</div>
```

Exemplo alerta de erro com tailwind:

```html
<div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 text-yellow-700">
  Você não tem mais acesso.<a class="underline ml-1">Faça o Upgrade agora!</a>
</div>
```

Exemplo card de invite com tailwind:

```html
<div class="w-96 rounded-md border-gray-500 bg-white p-4">
  <div>
    <div class="inline-block">
      <img class="w-14 h-14 rounded-full" src="" />
    </div>
    <div class="inline-block ml-5">
      <div class="text-black pb-2">Rafaela Silva</div>
      <div class="text-gray-500">Mandou um convite para você!</div>
    </div>
  </div>
  <div>
    <div class="rounded-md px-5 py-2 bg-blue-800 text-white">Aceitar</div>
    <div class="ml-3 rounded-md px-5 py-2 border border-gray-200 text-black">Negar</div>
  </div>
</div>
```

Ao utilizar o 'dark' podemos configurar classes para serem ativadas no dark mode do sistema:

```html
<div class="dark>:bg-blue-800 dark:text-white">Texto qualquer</div>
```

Para criar 'estilos base' (estilo padrão para um componente), acrescente no arquivo 'globals.css':

```css
@layer base{
  h1{
    @apply text-2xl;
    @apply bg-yellow-500;
  }
}
```

Você também pode criar os seus próprios componentes personalizados. Acrescente os componentes no arquivo 'globals.css':

```css
@layer components{
  .card {
    @apply m-2 p-3 bg-green-200;
  }
}
```


