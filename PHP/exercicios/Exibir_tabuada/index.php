<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Exibir a tabuada com PHP. 
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
	<title>Exibir a tabuada com PHP</title>
</head>
<body>

	<h1>Exibir a tabuada com PHP</h1>
	
	<table border="1">

	<?php

		//linha i coluna j
		for($i=1; $i < 10; $i++){

			echo "<tr>";

			for($j=1;$j < 10; $j++){

				$celula = $i * $j;

				echo "<td>".$celula."</td>";

			}

			echo "</tr>";

		}

	?>

	</table>

</body>
</html>

