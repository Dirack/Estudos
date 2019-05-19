<?php
/*
	calculadoraBasica.php (PHP)
	
	Objetivo: Exercício calculadora básica em PHP. 
	Exibe a resposta do cálculo enviado por index.php.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 19/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

*/

$numero1=floatval($_GET['numero1']);
$numero2=floatval($_GET['numero2']);
$operacaoMatematica=$_GET['operacaoMatematica'];

if((!empty($numero1)) && (!empty($numero2)) && (!empty($operacaoMatematica))){

	switch($operacaoMatematica){
		case '+':
		$resposta=$numero1+$numero2;
		echo "$numero1 $operacaoMatematica $numero2 = $resposta";
		break;

		case '-':
		$resposta=$numero1-$numero2;
		echo "$numero1 $operacaoMatematica $numero2 = $resposta";
		break;

		case '*':
		$resposta=$numero1*$numero2;
		echo "$numero1 $operacaoMatematica $numero2 = $resposta";
		break;

		case '/':
		$resposta=$numero1/$numero2;
		echo "$numero1 $operacaoMatematica $numero2 = $resposta";
		break;
	}
}else{
	header('location:index.php');
}

?>

