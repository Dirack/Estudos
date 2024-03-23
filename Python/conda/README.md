# Estudo sobre o conda, o gerenciador de pacotes e ambientes do python

Conda é o gerenciador de pacotes e ambientes do python.

## Atualização e versão do conda

Para ver a versão do conda:

```
conda --version
```

Para atualizar a versão:

```
conda update conda
```

## Criação de ambientes

Para criar um novo ambiente:

```
conda create -n <env-name>
```

Para adicionar pacotes enquanto cria o ambiente, basta especificar os pacotes após o nome do ambiente:

```
conda create -n myenvironment python numpy pandas
```

Para listar os ambientes criados:

```
conda info --envs
```

## Instalação de pacotes

Para fazer a instalação de pacotes em um ambiente criado. Através da ativação do ambiente:

```
# via environment activation
conda activate myenvironment
conda install matplotlib
```

Sem a ativação do ambiente:

```
# via command line option
conda install --name myenvironment matplotlib
```
