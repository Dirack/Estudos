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
