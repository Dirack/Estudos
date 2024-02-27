# Estudos sobre docker

## O que é Docker?

O Docker é um software de código aberto usado para implantar aplicativos dentro de containers virtuais.
A conteinerização permite que vários aplicativos funcionem em diferentes ambientes complexos.

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


Control groups ou cgroups é uma implementação interessante do kernel Linux que permite particionar os recursos do sistema (CPU, memória, I/O) por grupo de processos.

Por exemplo, em um sistema Linux que roda um servidor web e um banco de dados você pode usar esta
funcionalidade para alocar 50% de CPU para o grupo de processos responsáveis pelo acesso ao banco de dados, evitando que muitos acessos ao servidor web monopolizem a CPU.

Você consegue também alocar recursos por usuários em um servidor Linux.
Por exemplo, usuários comuns tem acesso apenas à 30% da CPU e 1G de RAM, enquanto que administradores tem acesso à 70% da CPU e o restante da memória do sistema.

Para não ficar apenas em exemplos de servidores Linux que usam cgroups, o Android também é um usuário desta funcionalidade.
Processos importantes no Android, incluindo a aplicação (activity) em foreground e os serviços do framework, são colocados em
um grupo do cgroups para garantir acesso aos recursos de CPU e RAM quando necessário.

[Leia mais sobre cgroups](https://sergioprado.org/gerenciando-acesso-recursos-linux-com-control-groups/)
