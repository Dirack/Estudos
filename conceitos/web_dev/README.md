## CORS

CORS (Cross-Origin Resource Sharing) é um mecanismo de segurança implementado pelos navegadores que controla o acesso entre diferentes origens. Quando uma aplicação frontend tenta consumir uma API hospedada em outra origem, o navegador verifica os cabeçalhos CORS retornados pelo servidor para decidir se a requisição pode ser concluída. O objetivo é evitar que sites não autorizados acessem recursos protegidos em nome do usuário.

CORS (Cross-Origin Resource Sharing) é um mecanismo de segurança implementado pelos navegadores.

Ele controla quais sites podem fazer requisições para outros sites.

Imagine:

Seu frontend está em: http://localhost:3000
Sua API está em: http://localhost:8000

Embora ambos estejam na sua máquina, para o navegador eles são origens diferentes.

Uma origem é composta por:

Protocolo + Domínio + Porta

Como as origens são diferentes, o navegador bloqueia a comunicação por padrão.

### Por que isso existe?

Imagine que você esteja logado no seu banco.

Se não existisse CORS, um site malicioso poderia executar JavaScript assim:

fetch("https://api.meubanco.com/saldo")

e ler informações privadas da sua conta.

O navegador impede isso por segurança.