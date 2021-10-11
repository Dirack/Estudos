<?php
/*
	index.php (PHP)
	
	Objetivo: Estudo sobre crude em PHP.

	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 23/06/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

require 'contact.class.php';

$database = "Estudos";
$host = "localhost";
$user = "root";
$password = "root";

$roxano = "roxano_jack@kgmail.com";
$dirack = "rodolfo_profissional@hotmail.com";
	
$contact = new Contact($database,$host,$user,$password);

$contact->add($dirack);
$contact->add($roxano,"Roxano");

echo "Nome (Roxano): ".$contact->getNome($roxano)."<br>";

$contact->setNome($dirack, "Dirack");

echo "Nome (Dirack): ".$contact->getNome($dirack)."<br>";

$contact->delete($roxano);

print_r($contact->getAll());



?>
