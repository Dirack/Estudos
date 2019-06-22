<?php
/*
	index.php (PHP)
	
	Objetivo: Estudo sobre namespace em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 22/06/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

require 'sobre1.php';
require 'sobre2.php';

$sobre = new \aplicacao\v1\Sobre();

echo "Versão ".$sobre->getVersao()."<br>";


$sobre2 = new \aplicacao\v2\Sobre();

echo "Versão ".$sobre2->getVersao()."<br>";
	
?>
