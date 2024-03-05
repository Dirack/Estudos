# Estudo fazer backup de dados utilizando repositórios git bare

Para clonar um repositório git no diretório atual para outro diretório local como repositório do tipo git bare:

```
git clone --bare . /diretorio/de/backup
```

Depois, você precisará adicionar o repositório git bare como um repositório remoto:

```
git remote add origin /diretorio/de/backup
```
