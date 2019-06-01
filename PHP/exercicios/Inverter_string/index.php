<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Função para inverter string com PHP. 
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
	<title>Função para inverter string com PHP</title>
</head>
<body>

	<h1>Função para inverter string com PHP</h1>

	<form method="POST">
		Digite um texto para ser invertido:<br>
		<input type="text" name="stringParaInverter"><br>
		<input type="submit" value="Inverter">
	</form><br>
	
	<hr>
	
	<?php 

		if(isset($_POST['stringParaInverter']) && !empty($_POST['stringParaInverter'])){

			$string = $_POST['stringParaInverter'];

			$tam = strlen($string);

			echo $string."<br>";

			for($i=1;$i<$tam+1;$i++){

				$caractere = substr($string,$tam-$i,1);

				echo $caractere;

			}

		}

	?>

</body>
</html>

