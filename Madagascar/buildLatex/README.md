# Reproducible papers do Madagascar com o pacote SEGTex

> Este é um exemplo de como produzir um reproducible paper do Madagascar utilizando Latex e o pacote SEGTex.

Primeiro, instale o pacote SEGTex deste repositório na sua pasta de usuário. Isto é feito instalando o conteúdo do diretório
'SEGTex/texmf' deste repositório em '~/textmf'. O Latex irá procurar pacotes extras instalados neste diretório local.

Você também pode utilizar o pacote baixado do [repositório oficial do SEGTex no github](https://github.com/SEGTeX/texmf)
ou do [repositório oficial do SEGTex no SourceForge](https://sourceforge.net/projects/segtex/).

Na [documentação oficial do Madagascar sobre o SEGTex](https://ahay.org/wiki/SEGTeX) tem a seguinte descrição do pacote:

```
SEGTeX is a LaTeX package for geophysical publications. It consists of

    LaTeX2e class files for Geophysics papers, SEG expanded abstracts, etc
    BibTeX style files seg.bst
    BibTeX cumulative bibliography of geophysical publications SEG.bib
    latex2html customizations
```

Daí, para rodar este exemplo, basta utilizar o comando 'scons' na pasta 'experiments' para gerar as figuras e depois rodar
'scons' na pasta raíz deste exemplo para o scons gerar o paper em PDF.
