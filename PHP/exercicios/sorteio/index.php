<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Simular sorteio com PHP. 
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
	<title>Simular sorteio com PHP</title>
</head>
<body>

	<h1>Simular sorteio com PHP</h1>
	
	<?php 

		$candidatos = file_get_contents("./candidatosSorteio.txt");
		$candidatos = explode("\n", $candidatos);
		array_pop($candidatos);

		echo "Array de candidatos do sorteio: ";
		print_r($candidatos);
		echo "<br>";

		//Sorteio
		$sorteado = rand(0,count($candidatos)-1);
		$sorteado = $candidatos[$sorteado];

		echo 	"Sorteado: ".$sorteado;

	?>

</body>
</html>

