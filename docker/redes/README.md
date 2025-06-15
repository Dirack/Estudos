# Redes no Docker

O Docker cria três redes automaticamente: __bridge, none e host__. A rede bridge é a rede padrão à qual os contêineres se conectam, permitindo comunicação interna entre eles.
Para acessar contêineres externamente, é necessário mapear as portas dos contêineres para as portas do host Docker ou usar a rede host, que remove a isolação de rede.

## Isolamento de Contêineres

O Docker permite criar redes internas personalizadas para isolar contêineres, utilizando o comando docker network create e especificando o driver e a sub-rede.
Para visualizar as configurações de rede de um contêiner existente, utiliza-se o comando docker inspect, que fornece informações sobre o endereço IP e outros detalhes.

## Resolução de Nomes de Contêiner

Os contêineres podem se comunicar usando seus nomes, graças a um servidor DNS interno do Docker, que facilita a resolução de nomes entre contêineres.
O Docker utiliza namespaces de rede e pares de Ethernet virtuais para isolar e conectar contêineres, garantindo que cada contêiner tenha seu próprio espaço de rede.
