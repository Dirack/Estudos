# Docker compose

[:arrow_up: Voltar a home](https://github.com/Dirack/Estudos/tree/master#ferramentas-gerais)

Docker Compose is a tool for defining and running multi-container applications.
It is the key to unlocking a streamlined and efficient development and deployment experience.

Compose simplifies the control of your entire application stack, making it easy to manage services,
networks, and volumes in a single, comprehensible YAML configuration file. Then, with a single command,
you create and start all the services from your configuration file.

## Índice

- [Olá mundo docker compose](https://github.com/Dirack/Estudos/tree/master/docker_compose/ola_mundo#ol%C3%A1-mundo-docker-compose) - Subir container nginx

## Key commands

To start all the services defined in your 'compose.yaml' file:

```
docker compose up
```

To stop and remove the running services:

```
docker compose down 
```

If you want to monitor the output of your running containers and debug issues, you can view the logs with:

```
docker compose logs
```

To lists all the services along with their current status:

```
docker compose ps
```
