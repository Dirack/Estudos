<?php
/*
	ordenarArray.php (PHP)
	
	Objetivo: Biblioteca de funções ordenar	valores em um array.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 01/06/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

function CriterioSorting($x,$y){

	if($x > $y){

		return true;

	}else{

		return false;

	}

}

function sorting($array){

	$controle=false;

	while(!$controle){

		$controle = true;

		for($i=1;$i < count($array);$i++){

			if(CriterioSorting(intval($array[$i-1]),intval($array[$i]))){

				$tmp = $array[$i-1];

				$array[$i-1] = $array[$i];

				$array[$i] = $tmp;

				$controle = false;

			}

		}

	}

	return $array;

}

?>


