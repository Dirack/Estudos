# Estudos sobre docker

[:arrow_up: Voltar a home](https://github.com/Dirack/Estudos/tree/master#ferramentas-gerais)

## Índice

- [Comandos básicos de docker](https://github.com/Dirack/Estudos/blob/master/docker/tutorial.md#tutorial-b%C3%A1sico-dos-comandos-do-docker) -  Tutorial básico dos comandos do docker
- [Troubleshooting do docker no windows](https://github.com/Dirack/Estudos/tree/master/docker#troubleshooting-do-docker-no-windows) -  Resolução de problemas comuns ao utilizar o docker no windows
- [Estudo: Criar container do nginx e fazer requisição para ele via curl](https://github.com/Dirack/Estudos/blob/master/docker/tutorial.md#estudo-criar-container-do-nginx-e-fazer-requisi%C3%A7%C3%A3o-para-ele-via-curl)
- [Estudo: Ver o quanto de recursos o container está utilizando](https://github.com/Dirack/Estudos/blob/master/docker/tutorial.md#estudo-ver-o-quanto-de-recursos-o-container-est%C3%A1-utilizando)
- [Estudo: Teste de stress no container](https://github.com/Dirack/Estudos/blob/master/docker/tutorial.md#estudo-teste-de-stress-no-container)
- [Exemplo criação de dockerfile simples](https://github.com/Dirack/Estudos/tree/master/docker/dockerfile_simples#exemplo-cria%C3%A7%C3%A3o-de-dockerfile-simples) - Exemplo de um dockerfile simples para rodar o programa stress no debian
- [Volume tipo bind](https://github.com/Dirack/Estudos/tree/master/docker/volume_bind#exemplo-de-cria%C3%A7%C3%A3o-de-volume-do-tipo-bind-em-docker) - Exemplo de criação de volume do tipo bind em docker
- [Volume tipo volume](https://github.com/Dirack/Estudos/tree/master/docker/volume_volume#exemplo-de-cria%C3%A7%C3%A3o-de-volume-do-tipo-volume-em-docker) - Exemplo de criação de volume do tipo volume em docker
- [Container com PHP e Mysql](https://github.com/Dirack/Estudos/tree/master/docker/php_mysql#exemplo-de-cria%C3%A7%C3%A3o-e-orquestra%C3%A7%C3%A3o-de-container-com-docker-e-docker-compose---php-e-mysql) - Exemplo de criação e orquestração de containers com docker e docker compose. Neste exemplo, um container com PHP, outro com Mysql e outro com PHPmyadmin são criados e orquestrados para exibir uma lista de usuários com PHP
- [Data only](https://github.com/Dirack/Estudos/tree/master/docker/data_only#exemplo-utiliza%C3%A7%C3%A3o-de-volumes-data-only-docker) - Exemplo sobre persistência de dados e storage utilizando volumes e containers do docker
- [Dockerfile Apache](https://github.com/Dirack/Estudos/tree/master/docker/dockerfile_apache#exemplo-de-constru%C3%A7%C3%A3o-de-imagem-do-apache-com-dockerfile) - Exemplo criando imagem do apache com Dockerfile
- [Dockerfile C](https://github.com/Dirack/Estudos/tree/master/docker/dockerfile_script#exemplo-de-dockerfile-para-compilar-e-rodar-programa-em-c-no-linux-ubuntu) - Exemplo de dockerfile para compilar e rodar programa em linguagem c no linux ubuntu
- [Container docker para rodar shell script](https://github.com/Dirack/Estudos/tree/master/docker/terminal#container-docker-para-rodar-shell-script) - Estudo sobre interatividade de terminal no docker
- [Container docker de aplicação flask e bind de portas](https://github.com/Dirack/Estudos/tree/master/docker/ports#container-docker-de-aplica%C3%A7%C3%A3o-flask-e-bind-de-portas) - Estudo sobre containarização de aplicações python flask e bind de portas no docker
- [Jenkins e Docker](https://github.com/Dirack/Estudos/tree/master/docker/jenkins#rodar-o-jenkins-em-um-container-docker) - Rodar o jenkins em um container docker
- [Rodar aplicação flask no docker](https://github.com/Dirack/Estudos/tree/master/docker/flask#rodar-aplica%C3%A7%C3%A3o-flask-no-docker)
- [Environment variables](https://github.com/Dirack/Estudos/tree/master/docker/env_var#exemplo-de-uso-de-vari%C3%A1veis-de-ambiente-no-docker) - Exemplo de uso de variáveis de ambiente no docker
- [Redes no docker](https://github.com/Dirack/Estudos/tree/master/docker/redes#redes-no-docker) - Estudo sobre redes

## O que é Docker?

O Docker é um software de código aberto usado para implantar aplicativos dentro de containers virtuais.
A conteinerização permite que vários aplicativos funcionem em diferentes ambientes complexos.

[Tutorial Fábio Akita: Entendendo Funcionamento de Containers](https://www.youtube.com/watch?v=85k8se4Zo70)

## Docker vs Máquina Virtual

Embora o Docker e as máquinas virtuais tenham um propósito semelhante, seu desempenho, portabilidade e suporte a sistemas operacionais diferem significativamente.

A principal diferença é que os containers do Docker compartilham o sistema operacional do host,
enquanto as máquinas virtuais também têm um sistema operacional convidado sendo executado no sistema host.
Esse método de operação afeta o desempenho, as necessidades de hardware e o suporte do SO.

## O Que é um Container Docker?

Um container Docker é um pacote de software com todas as dependências necessárias para executar um aplicativo específico.
Todas as configurações e instruções para iniciar ou parar containers são ditadas pela imagem do Docker. Sempre que um usuário executa uma imagem, um novo container é criado.

É fácil gerenciar containers com a ajuda da API do Docker ou da interface de linha de comando (ILC).
Se forem necessários vários containers, os usuários podem controlá-los com a Ferramenta de composição do Docker.

## Entendendo a teoria por trás do docker: Cgroups e namespaces

Basicamente, um container (independente da tecnologia) é formado por 2 elementos: Cgroups e Namespaces.
Resumidamente, o namespace oferece isolamento dos recursos e o cgroups impõe limites de recursos aos ambientes isolados.

### O que é namespace?

Introduzido em 2002, na versão 2.4.19 do kernel Linux, Namespace é uma feature que permite criar e lidar com diversos contextos em um mesmo sistema,
vendo propriedades globais diferentes e isoladas em cada contexto. Para facilitar o entendimento, com namespace é possível criar um contexto (ou ambiente)
de rede isolado do ambiente físico. Nesse novo contexto, existirão interfaces de rede física que não são visíveis no contexto do sistema; essas interfaces terão endereços
físicos e lógicos diferentes do contexto do sistema e todo tráfego, regras de firewall, existentes nesse novo contexto,
não são vistos por nenhum outro contexto, incluindo o contexto do sistema.

[Leia mais sobre namespaces...](https://medium.com/@lets00/namespace-14c4e64d0559)

### O que é cgroups?

Control groups ou cgroups é uma implementação interessante do kernel Linux que permite particionar os recursos do sistema (CPU, memória, I/O) por grupo de processos.

Por exemplo, em um sistema Linux que roda um servidor web e um banco de dados você pode usar esta
funcionalidade para alocar 50% de CPU para o grupo de processos responsáveis pelo acesso ao banco de dados, evitando que muitos acessos ao servidor web monopolizem a CPU.

Você consegue também alocar recursos por usuários em um servidor Linux.
Por exemplo, usuários comuns tem acesso apenas à 30% da CPU e 1G de RAM, enquanto que administradores tem acesso à 70% da CPU e o restante da memória do sistema.

Para não ficar apenas em exemplos de servidores Linux que usam cgroups, o Android também é um usuário desta funcionalidade.
Processos importantes no Android, incluindo a aplicação (activity) em foreground e os serviços do framework, são colocados em
um grupo do cgroups para garantir acesso aos recursos de CPU e RAM quando necessário.

[Leia mais sobre cgroups...](https://sergioprado.org/gerenciando-acesso-recursos-linux-com-control-groups/)

### O que é Copy on Write?

Em resumo, as imagens docker são compostas por camadas ready only (apenas leitura) e uma camada onde é permitida a escrita em tempo de execução.
As camadas de leitura são compartilhadas por todos os containers que utilizam a mesma imagem, apenas a camada de escrita é particular para cada container.
Isso é feito para garantir a integridade das camadas compartilhadas pelos containers (eles utilizam os mesmos dados e informações) e melhorar o desempenho
(não é necessário replicar dados compartilhados).

[Leia mais sobre copy on write](https://matheuslao.dev/posts/docker-images-ro-rw-layers-cow-dive/)

### Troubleshooting do docker no windows

Existem alguns problemas que podem surgir ao rodar o docker no windows. Alguns exemplos podem não funcionar corretamente.

Um dos problemas é a utilização de arquivos unix no windows. Isto pode gerar problema de leitura e você precisará fazer a conversão. O erro
que aparece é como a seguir:

```
bash: ./test_file.sh: cannot execute: required file not found
```

Para corrigir o arquivo de texto para o formato do windows ou unix utilize o programa 'dos2unix'.

[Leia mais...](https://commandmasters.com/commands/dos2unix-linux/)

Outro problema é rodar um container a partir do Git Bash, pois o git bash não é um TTY.
Para tanto utilize o seguinte comando:

```
winpty docker run -ti estudo
```

Para fazer o bind de volumes, você deve considerar as barras invertidas nos endereços do host, como no exemplo:

```
docker run -v C:\Users\RodolfoNEVES\Documents\Eliis_SECB\0_Inbox\estudo\myvol\:/myvol -ti estudo
```
