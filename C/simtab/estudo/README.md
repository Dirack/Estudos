# Estudo sobre separador de strings em C

Este programa separa strings passadas pela linha de comandos
na chamada ao programa. Para rodar o exemplo completo, basta chamar
o comando a seguir:

```sh
make
```

# Lógica da função sf_simtab_put

Esta função separa uma string na forma _chave=valor_ utilizando o '=' como separador. No começo da função, é armazenado
o índice do começo da string _valor_ no ponteiro para char 'eq' utilizando a função strchr que retorna a primeira ocorrência da string
passada como a seguir:

```c
eq = strchr("par1=10",'=');
if (NULL == eq) return;
eq++;
```

* Exemplo, para a string par1=10 a variável 'eq' irá apontar para '1' (igual ao índice do separador '=' mais 1).

O tamanho da chave é armazenado em keylen, basta copiar a string original para a string key (que armazenará a chave):

```c
keylen = (size_t) (eq-keyval);
//printf("keylen=%ld\n",keylen);
key = (char*) malloc(keylen*sizeof(char));
memcpy(key,keyval,keylen);
```

E daí basta "cortar" o valor atribuindo NULL no lugar do separador em key:

```c
key[keylen-1]='\0';
```
