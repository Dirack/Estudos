## Método Runge-Kutta

Método numérico para a solução de equações diferenciais de primeira ordem.

## O método Runge-Kutta clássico de quarta ordem

Um membro da família de métodos Runge-Kutta é usado com tanta frequência
que costuma receber o nome de "RK4" ou simplesmente "o método Runge-Kutta".

Seja um problema de valor incial (PVI) especificado como  segue:

Então o método RK4 para este problema é dado por:

Onde $y\_{n+1}$ é a aproximação por RK4 de y(t\_n+1), e

Então, o próximo valor (y\_{n+1}) é determinado pelo valor atual (y\_n) somado com o tamanho do intervalo (h) e uma inclinação estimada. A inclinação é uma média ponderada de inclinações:

Métodos numéricos para equações diferenciais ordinárias são métodos usados para encontrar aproximações para soluções de EDO's. Eles também podem ser chamados de "integração numérica", mas nesse sentido são mais gerais que o cálculo numérico de integrais.

As soluções da grande maioria das ED's não podem ser expressas em termos de funções elementares, motivando o desenvolvimento e uso de métodos numéricos.
