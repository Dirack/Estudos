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
