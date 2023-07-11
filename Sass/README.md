# Sass

## O que é SASS?

Segundo sua própria página, a sigla SASS significa “Syntactically Awesome Style Sheets” – ou seja, Folhas de Estilo com Sintaxe Espetacular.

A ideia é manter a mesma lógica do CSS (seletores, regras etc), mas de uma maneira mais organizada, intuitiva e com trechos de código facilmente reutilizáveis.

Com o SASS, é muito mais fácil desenvolver um projeto grande e não se perder no meio de tanto código.

## Variáveis

Utilizar variáveis

```scss
$cor-padrao: #EEE;

.quadrado{
  background-color: $cor-padrao;
}
```

## Grupos de elementos

Dá para agrupar propriedades dentro de elementos

```scss
nav {
  background-color: #EEE;

  ul {
    color: white;
  }

  li {
    display: inline-block;
  }
}
```

## Importando arquivos

Utilize para importar o arquivo '_reset.scss' (utilize '\_' como prefixo do arquivo a ser importado):

```scss
@import 'reset'
```

__Importante:__ O Sass junta os arquivos importados em um arquivo só no ato da compilação, isso torna
o carregamento mais rápido do que no import do CSS convencional

## Mixin

```scss
@mixin girar($graus){
  transform: rotate($graus);
  -webkit-transform: rotate($graus);
  -mz-transform: rotate($graus);
  -ms-transform: rotate($graus);
}

/* Para utilizar o mixin utilize o @include */
li {
  @include girar(90deg);
}
```

## Expandindo propriedades

```scss

/* Grupo de propriedades */

%fundamento-msg{
  padding: 10px;
  color: white;
}

/* Para utilizar o grupo utilize o @extend */
.msg-info{
  @extend %fundamento-msg;
  background-color: purple;
}
.msg-error{
  @extend %fundamento-msg;
  background-color: red;
}
```
