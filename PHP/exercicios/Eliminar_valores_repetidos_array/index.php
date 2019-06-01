<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Eliminar valores repetidos de array com PHP. 
	Exercício do módulo de PHP intermediário
	do curso PHP profissional do professor Bonieky.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 01/06/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
-->
<head>
	<meta charset="utf-8">
	<title>Eliminar valores repetidos de array com PHP</title>
</head>
<body>

	<h1>Eliminar valores repetidos de array com PHP</h1>
	
	<?php 

		echo "Array com valores repetidos: <br>";

		$arrayValoresRepetidos = array(1,2,3,4,5,1,1,2,3,6);

		print_r($arrayValoresRepetidos);

		echo "<br>";

	?>

	<?php

		$arraySemRepetidos = array();

		array_push($arraySemRepetidos,$arrayValoresRepetidos[0]);

		for($i=1; $i < count($arrayValoresRepetidos); $i++){

			if(!in_array($arrayValoresRepetidos[$i],$arraySemRepetidos)){

				array_push($arraySemRepetidos,$arrayValoresRepetidos[$i]);

			}

		}

		echo "Array SEM valores repetidos: <br>";

		print_r($arraySemRepetidos);

	?>

</body>
</html>

