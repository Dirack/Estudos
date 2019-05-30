<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Conversor de palavra em dígito numérico com PHP. 
	Exercício do módulo de PHP intermediário
	do curso PHP profissional do professor Bonieky.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 29/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
-->
<head>
	<meta charset="utf-8">
	<title>Conversor de palavra em dígito numérico com PHP</title>
</head>
<body>

	<form method="POST">
		<h1>Conversor de palavra em dígito numérico com PHP</h1>
		<q>Digite os números separados por vírgula e sem espaços como no exemplo:
		<i>um,dois,três,quatro,cinco</i></q><br>
		<input type="text" name="palavras" required><br>
		<input type="submit" value="Converter"><br><br>
	</form>

	<?php

		if(isset($_POST['palavras']) && !empty($_POST['palavras'])){

			$numeros = $_POST['palavras'];


			echo "<hr><br>";
			echo $_POST['palavras']."<br><br>";
			
			$numeros = str_replace("zero","0",$numeros);
			$numeros = str_replace("um","1",$numeros);
			$numeros = str_replace("dois","2",$numeros);
			$numeros = str_replace("três","3",$numeros);
			$numeros = str_replace("quatro","4",$numeros);
			$numeros = str_replace("cinco","5",$numeros);
			$numeros = str_replace("seis","6",$numeros);
			$numeros = str_replace("sete","7",$numeros);
			$numeros = str_replace("oito","8",$numeros);
			$numeros = str_replace("nove","9",$numeros);

			echo $numeros;
	
		}

	?>



</body>
</html>

