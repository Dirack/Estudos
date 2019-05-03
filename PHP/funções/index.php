<?php
/*
	index.php (PHP)
	
	Objetivo: Estudo sobre funções em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 03/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

$x=1;
$y=2;

function somarNumero($x, $y){
	return $x+$y;
}

echo "<h1>Estudo sobre funções em PHP</h1>";

echo "A soma de ".$x."+".$y." é ".somarNumero($x,$y);

?>

