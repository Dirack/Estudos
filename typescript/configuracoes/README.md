# Aspectos gerais de configuração do TypeScript

## Compilação do arquivo em watchmode

```
tsc src/script.ts -w
```

## Criando arquivo de configuração do TypeScript

```
tsc --init
```

## Compilação do projeto utilizando o arquivo de configuração do TypeScript

```
tsc
```

## Utilização de include e exclude

[Exemplo](https://github.com/Dirack/Estudos/blob/01224f41e411c9e102d547a321811a9b1fb21ae7/typescript/configuracoes/tsconfig.json#L102)

## Entendendo as principais configurações

- [Configuração do ES](https://github.com/Dirack/Estudos/blob/01224f41e411c9e102d547a321811a9b1fb21ae7/typescript/configuracoes/tsconfig.json#L14)
- [Bibliotecas adicionadas ao projeto](https://github.com/Dirack/Estudos/blob/01224f41e411c9e102d547a321811a9b1fb21ae7/typescript/configuracoes/tsconfig.json#L15)
- [Rootdir (pasta com os códigos fonte)](https://github.com/Dirack/Estudos/blob/01224f41e411c9e102d547a321811a9b1fb21ae7/typescript/configuracoes/tsconfig.json#L28)
- [Outdir (pasta com os arquivos compilados)](https://github.com/Dirack/Estudos/blob/01224f41e411c9e102d547a321811a9b1fb21ae7/typescript/configuracoes/tsconfig.json#L50)
- [Remover comentários](https://github.com/Dirack/Estudos/blob/01224f41e411c9e102d547a321811a9b1fb21ae7/typescript/configuracoes/tsconfig.json#L51)
- [NoEmit - Não gerar os arquivos compilados](https://github.com/Dirack/Estudos/blob/01224f41e411c9e102d547a321811a9b1fb21ae7/typescript/configuracoes/tsconfig.json#L52)
- [NoEmitOnError - Não gerar se tiver erros](https://github.com/Dirack/Estudos/blob/01224f41e411c9e102d547a321811a9b1fb21ae7/typescript/configuracoes/tsconfig.json#L64)
- [NoUnusedLocals - Não gerar se tiver variáveis não usadas (nível local)](https://github.com/Dirack/Estudos/blob/bc9bae44274831328efed7cfce59473d6b172ec0/typescript/configuracoes/tsconfig.json#L86)
- [NoUnusedParameters - Não gerar se tiver parâmetros não usados](https://github.com/Dirack/Estudos/blob/bc9bae44274831328efed7cfce59473d6b172ec0/typescript/configuracoes/tsconfig.json#L87)
- [NoImplicitRetuns - Não gerar se tiver retorno implícito](https://github.com/Dirack/Estudos/blob/bc9bae44274831328efed7cfce59473d6b172ec0/typescript/configuracoes/tsconfig.json#L89)
