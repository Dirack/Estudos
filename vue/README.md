# VueJS

## Associação bi-lateral

```html
<div id="app">
  <input v-model="texto" />
  <span>{{texto}}</span>
</div>
```

## Usando métodos

```js
let app = new Vue({
    el:'#app',
    data:{
    },
    method: {
      mostrar: (nome,idade)=>{
        return 'Olá '+nome+', '+idade
      }
    }
})
```

```html
  <span>{{mostrar('Rodolfo',31)}}</span>
```
