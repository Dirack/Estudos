# Estudos sobre TailwindCSS

Para testar via CDN basta adicionar na página HTML:

```
<script src="https://cdn.tailwindcss.com"></script>
```

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

Daí basta utilizar como outra classe qualquer do tailwind:

```html
<div class="bg-vermelhao">Texto vermelhão</div>
```
