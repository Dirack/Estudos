#### Tipo Abstrato de dados (TAD)

Tipo de dados: define o conjunto de valores (domínio) que uma variável pode assumir.

Ex: int
-N,..., -2, -1, 0, +1, +2, ..., +N

Estruturas de dados: trata-se de um relacionamento lógico entre tipos de dados.

Tipos Abstrato de Dados: incluem as operações para a manipulação dos dados.

Ex:

- criação da estrutura
- inclusão de um elemento
- remoção de um elemento
- acesso a um elemento
- etc

Vantagens:

- Encapsulamento e Segurança: usuário não tem acesso direto aos dados

- Flexibilidade e Reutilização: podemos alterar o TAD sem alterar as aplicações que o utilizam

Exemplo de TAD: arquivos em C

```c
FILE* f;
```

Os dados de f somente podem ser acessados pelas funções de manipulação do tipo:

- fopen
- fclose
- fputc
- fgetc
- feof
- etc
