# PHP Unit

> Framework para testes unitários em PHP

## Índice

- [Teste simples](https://github.com/Dirack/Estudos/tree/master/PHP/PHPUnit/teste_simples#exemplo-de-teste-unit%C3%A1rio-simples-com-php-unit) - Exemplo de teste unitário simples com PHP Unit
- [Data provider](https://github.com/Dirack/Estudos/tree/master/PHP/PHPUnit/data_provider#exemplo-de-teste-unit%C3%A1rio-com-data-provider-no-php-unit) - Testar vários casos de teste na mesma função de teste utilizando data provider
- [Arquivo não existe](https://github.com/Dirack/Estudos/tree/master/PHP/PHPUnit/expect_error#exemplo-de-teste-verificar-ser-arquivo-n%C3%A3o-existe-com-php-unit) - Verificar se arquivo não existe
- [Incomplete e output](https://github.com/Dirack/Estudos/tree/master/PHP/PHPUnit/incomplete_and_output#exemplo-de-teste-unit%C3%A1rio-incompleto-e-an%C3%A1lise-da-sa%C3%ADda-do-echo-com-php-unit) - Ignorar testes unitários e analisar a saída do comando echo
- [Asserts](https://github.com/Dirack/Estudos/tree/master/PHP/PHPUnit/asserts#principais-assertions-do-php-unit) - Estudo sobre as principais assertions do php unit

## Instalação do composer

Instale as dependências:

```
sudo apt update
sudo apt upgrade
sudo apt install php-cli unzip
```

Instale o composer via curl:

```
cd ~
curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php
sudo php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

Teste a instalação:

```
composer
```

## Instalação do PHP Unit via composer

Para instalar o PHP unit via composer utilize o seguinte comando:

```
composer require phpunit/phpunit --dev
```

## Configurando o autoload das classes

Para rodar o PHP unit com o composer, adicione o diretório com as classes no autoload e no array classmap.
No exemplo a seguir, o autoload é configurado para mapear as classes da pasta 'includes' (arquivo composer.json):

```
{
    "autoload":{
        "classmap":[
            "includes/"
        ]
    }
    ,
    "require-dev": {
        "phpunit/phpunit": "^9.6"
    }
}
```

Daí basta atualizar o mapeamento sempre que necessário com o comando:

```
composer update
```

