COMPOSER_JSON="composer.json.template"

all:	install build_composer_json update run_test

install:
	composer require phpunit/phpunit --dev

build_composer_json:
	cp $(COMPOSER_JSON) composer.json

update:
	composer update

run_test:
	./vendor/bin/phpunit --bootstrap vendor/autoload.php test/CalculadoraTest.php

help:
	@echo "Este Makefile roda os testes da pasta 'test' utilizando o PHP Unit e o composer"
	@echo "Os alvos 'install', 'build_composer_json', 'update' realizam a configuração do teste"
	@echo "O alvo 'run_test' roda o teste unitário"
