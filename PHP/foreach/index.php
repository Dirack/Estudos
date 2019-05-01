<?php
/*
	index.php (PHP)
	
	Objetivo: Estudo sobre laço FOREACH em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 01/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

echo "<h1>Estudo sobre laço FOREACH em PHP</h1>";

$x=array("Aderbal","Tobias","Fulano","Jack");

foreach($x as $y){
	echo "(FOREACH) Nome é: ".$y."<br>";
}

echo "<h1>FOREACH para array de arrays</h1>";

$nomes=array(
	"Aderbal"=>array("nome"=>"Aderbal","idade"=>90),
	"Tobias"=>array("nome"=>"Tobias","idade"=>42),
	"Fulano"=>array("nome"=>"Fulano","idade"=>23),
	"Jack"=>array("nome"=>"Jack","idade"=>12)
);

foreach($nomes as $y){
	echo "(FOREACH) Nome é: ".$y["nome"]." idade: ".$y["idade"]."<br>";
}

echo "<h1>FOREACH pegando chave e valor </h1>";

foreach($nomes as $chave => $valor){
	echo $chave."{nome=".$valor["nome"]." idade=".$valor["idade"]."}</br>";
}

?>

