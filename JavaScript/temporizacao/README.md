# Temporização no JS: setTimeout e setInterval

```js
function mostrarHora() {
  const agora = new Date();
  console.log(agora.toLocaleTimeString());
}

// Executa a função mostrarHora a cada segundo (1000 milissegundos).
const intervalo = setInterval(mostrarHora, 1000);

// Para o intervalo após 5 segundos
setTimeout(() => {
  clearInterval(intervalo);
  console.log("Intervalo parado");
}, 5000);
```
