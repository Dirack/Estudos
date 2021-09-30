# Estudo sobre pacotes debian no Linux

Gerar o pacote em uma pasta com o nome do pacote e versão, exemplo 'teste_0.1_all'. A estrutura de diretórios da pasta deve ser semelhante
a do [exemplo](https://github.com/Dirack/Estudos/tree/master/Shell_script/debian/teste/teste_0.3_all) neste repositório e deve conter o arquivo
de controle em DEBIAN/control.

Para fazer o build do pacote, vá um diretório acima da pasta do pacote e rode o seguinte comando:

```sh
dpkg-deb --build teste_0.1_all/
```

Gere a lista de pacotes do repositório que será lida pelo apt:

```sh
dpkg-scanpackages -m . /dev/null > Packages
```

A opção -m permite múltiplas versões do mesmo pacote serem listadas.

Adicione o repositório local a /etc/apt/sources.list:

```
deb [trusted=yes] file:///opt/debs ./
```

Para um repositório remoto, funciona da mesma maneira:

```sh
deb [trusted=yes] https://dirack.github.io/debian ./
```
