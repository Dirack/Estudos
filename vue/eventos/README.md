# Eventos

```html

<form v-on:click.prevent="algoDiferente">
  ...
</form>

<div class="area" v-on:click.self="algo">
  <button>Clique aqui</button>
</div>

<div class="area" v-on:click.once="algo">
  <button>Clique aqui</button>
</div>

<div class="area" v-on:click.self.once="algo">
  <button>Clique aqui</button>
</div>
```
