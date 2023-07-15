# Renderização condicional

```html
  <h1 v-if="ganhou">Você ganhou!</h1>
  <h1 v-if="!ganhou">Você perdeu!</h1>

  <h1 v-show="ganhou">Você ganhou!</h1>
  <h1 v-show="!ganhou">Você perdeu!</h1>
```

```html

<template v-if="ganhou=='y'">
  <h1>Você ganhou!</h1>
  <small>Parabéns</small>
</template>
<template v-else-if="ganhou=='n'">
  <h1>Você perdeu!</h1>
  <small>Desculpe</small>
</template>
<template v-else>
  <h1>Empatou!</h1>
  <small>É, né</small>
</template>

```
