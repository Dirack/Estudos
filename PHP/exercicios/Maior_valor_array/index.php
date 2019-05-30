<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Encontrar o maior valor de um array com PHP. 
	Exercício do módulo de PHP intermediário
	do curso PHP profissional do professor Bonieky.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 30/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
-->
<head>
	<meta charset="utf-8">
	<title>Encontrar o maior valor de um array com PHP</title>
</head>
<body>

	<form method="POST">
		<h1>Encontrar o maior valor de um array com PHP</h1>
		<q>Digite os números separados por vírgula e sem espaços como no exemplo:
		<i>1,2,3,4,5</i></q><br>
		<input type="text" name="array" required><br>
		<input type="submit" value="Encontrar Maior"><br><br>
	</form>

	<?php

		if(isset($_POST['array']) && !empty($_POST['array'])){

			$arrayNumeros = explode(',',$_POST['array']);
			
			$maiorValor = $arrayNumeros[0];

			for($i=1; $i < count($arrayNumeros); $i++){

				if($maiorValor < $arrayNumeros[$i]){

					$maiorValor = $arrayNumeros[$i];

				}


			}

			print_r($arrayNumeros);
			echo "<br>";
			echo "Maior valor do array: ".$maiorValor;
	
		}

	?>



</body>
</html>

