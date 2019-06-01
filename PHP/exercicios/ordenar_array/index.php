<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Ordenar números em um array com PHP. 
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
	<title>Ordenar números em um array com PHP</title>
</head>
<body>

	<h1>Ordenar números em um array com PHP</h1>
	<q>Digite os números separados por vírgula como no exemplo: 1,6,12,4,5,3</q>

	<form method="POST">
		<input type="text" name="numeros"><br>
		<input type="submit" value="Ordenar"><br>
	</form><br>

	<hr>
	
	<?php 

		require_once('ordenarArray.php');

		if(isset($_POST['numeros']) && !empty($_POST['numeros'])){

			$arrayDesordenado = explode(',',$_POST['numeros']);

			echo "Array desordenado: ";
			print_r($arrayDesordenado);
			echo "<br>";

			$arrayOrdenado = array();

			$arrayOrdenado = sorting($arrayDesordenado);

			echo "Array Ordenado: ";
			print_r($arrayOrdenado);
			echo "<br>";

		}

	?>

</body>
</html>

