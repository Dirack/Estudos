# Promises

Quando você cria uma Promise, você recebe dois argumentos na função: resolve e reject.

- resolve(valor) → sinaliza que a Promise foi bem-sucedida.

- reject(erro) → sinaliza que a Promise falhou.

## Estrutura básica

```js
const promessa = new Promise((resolve, reject) => {
  const sucesso = false;

  if (sucesso) {
    resolve("Tudo certo!");
  } else {
    reject("Algo deu errado.");
  }
});

promessa
  .then((resultado) => {
    console.log("Sucesso:", resultado);
  })
  .catch((erro) => {
    console.error("Erro:", erro);
  });
```

## Estrutura básica com temporizador

```js
const promessa = new Promise((resolve,reject)=>{
    const sucesso = false;

    const interval = setInterval(()=>{
        clearInterval(interval)
        if(sucesso){
            resolve("Deu certo!")
        }else{
            reject("Algo deu errado :(")
        }
    },5000)

})

promessa.then((resultado)=>{
    console.log(resultado)
})
.catch((erro)=>{
    console.log(erro)
})

console.log("Chamei a promessa",promessa)
```


## Exemplo: Simular falha

```js
let newProject = {
  status: "launching",
  fetchDataWithDelay: function () {
    return new Promise((resolve, reject) => {
      let i = 0;

      const interval = setInterval(() => {
        if (this.status === "aborted") {
          clearInterval(interval);
          return reject(new Error("Processo abortado pelo usuário."));
        }

        if (i >= statusList.length) {
          clearInterval(interval);
          return resolve(this.status);
        }

        this.status = statusList[i++];
        console.log("Status:", this.status);
      }, 1000);
    });
  }
};

// Simula statusList
const statusList = ["installing", "running", "aborted", "finished"];

// Executa
newProject.fetchDataWithDelay()
  .then(status => {
    console.log("Processo concluído com status:", status);
  })
  .catch(erro => {
    console.error("Falha:", erro.message);
  });
```
