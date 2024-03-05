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

E se precisar entrar no container e executar um terminal utilize:

```
docker container exec -ti <containerID> bash
```

Para executar um comando qualquer dentro do container em execução sem attachar:

```
docker container exec -ti <containerID> ls /
```

Para sair de um container matando o principal processo utilizamos 'Ctrl+d'. Para sair
sem matar o processo utilizamos 'Ctrl+p+q'.

Para remover um container:

```
docker container rm <containerID>
```

Para fazer o start, stop, restart de um container utilizamos:

```
docker container (start|stop|restart) <containerID>
```

Da mesma forma, para pausar e despausar o container:

```
docker container (pause|unpause) <containerID>
```

Para ver os logs do container:

```
docker container logs -f <containerID>
```

Da mesma forma, para ver o consumo de recursos do container:

```
docker container stats <containerID>
```

Da mesma forma, para ver os processos que estão rodando no container:

```
docker container top <containerID>
```

Para a remoção de containers que não estão sendo utilizados e volumes que não estão sendo utilizados, respectivamente:

```
docker container prune
```

```
docker volume prune
```

## Estudo: Criar container do nginx e fazer requisição para ele via curl

Inicie um container do nginx e depois utilize o comando a seguir para obter o endereço de IP (IPAddress):

```
docker container inspect <containerID>
```

Daí utilize o comando curl para enviar uma requisição para este IP:

```
curl <IPAddress>
```

Tente pausar o container e depois fazer a requisição. Depois faça o unpause e faça a requisição.

## Estudo: Ver o quanto de recursos o container está utilizando

Inicie um container do nginx e depois utilize o comando a seguir para obter o endereço de IP (IPAddress):

```
docker container inspect <containerID>
```

Em um terminal rode o curl em looping:

```
while true; do curl <IPAddress>; done
```

E no outro terminal verifique o quanto o container utiliza de recursos com a opção stats:

```
docker container stats <containerID>
```

## Estudo: Teste de stress no container

Inicie um container do ubuntu, entre no container e faça a instalação do stress:

```
apt-get update && apt-get install stress
```

Faça o teste de stress na máquina:

```
stress --cpu 1 --vm-bytes 128M --vm 1
```

Daí verifique o quanto o container utiliza de recursos com a opção stats:

```
docker container stats <containerID>
```
