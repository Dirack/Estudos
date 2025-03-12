# Rodar o jenkins em um container docker

Para rodar o jenkins em um container do docker e fazer o bind das portas
8080 do host para a porta 8080 do container e da porta 5000 do host para a
porta 5000 do container utilize o comando a seguir.

```
docker run -p 8080:8080 -p 5000:5000 jenkins/jenkins
```

Você poderá então acessar o jenkins no link 'http://localhost:8080'.

Para persistir os dados do jenkins, crie um volume your_volume e faça o bind
para o diretório '/var/jenkins_home' no container como a seguir.

```
docker run -p 8080:8080 -p 5000:5000 -v ./myvol:/var/jenkins_home jenkins/jenkins
```
