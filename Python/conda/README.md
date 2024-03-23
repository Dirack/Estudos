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

Creating environments

Conda allows you to create separate environments, each containing their own files, packages, and package dependencies. The contents of each environment do not interact with each other.

The most basic way to create a new environment is with the following command:

conda create -n <env-name>

To add packages while creating an environment, specify them after the environment name:

conda create -n myenvironment python numpy pandas

For more information on working with environments, see Managing environments.
Listing environments

To see a list of all your environments:

conda info --envs

A list of environments appears, similar to the following:

conda environments:

   base           /home/username/Anaconda3
   myenvironment   * /home/username/Anaconda3/envs/myenvironment



Installing packages

You can also install packages into a previously created environment. To do this, you can either activate the environment you want to modify or specify the environment name on the command line:

# via environment activation
conda activate myenvironment
conda install matplotlib

# via command line option
conda install --name myenvironment matplotlib

