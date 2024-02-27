# Tutorial básico dos comandos do docker

Para listar todos os containers em execução (Com opções adicionais, também é possível ver containers parados):

```
docker ps
```

Para listar os containers (utilize -a para visualizar todos inclusive os parados):

```
docker container ls
```

O quick start do docker é rodar um container com a imagem 'hello-world' que exibe um aviso na tela
(a flag -ti é para habilitar iteratividade via terminal):

```
docker container run -ti hello-world
```

Para attachar em um container em execução basta utilizar:

```
docker container attach <containerID>
```

Para alguns containers a execução em segundo plano é melhor (opção -d), pois não haverá iteratividade
via terminal. Um exemplo é um container do 'nginx':

```
docker container run -d nginx
```

Para executar um comando dentro do container em execução sem attachar:

```
docker container exec -ti <containerID> ls /
```

Para sair de um container matando o principal processo utilizamos 'Ctrl+d'. Para sair
sem matar o processo utilizamos 'Ctrl+p+q'.