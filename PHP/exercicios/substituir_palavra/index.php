<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Trocar uma palavra de um texto por outra com PHP. 
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
	<title>Trocar uma palavra de um texto por outra com PHP</title>
</head>
<body>

	<h1>Trocar uma palavra de um texto por outra com PHP</h1>

	<form method="POST">
		Texto original: <br><input type="text" name="texto" required><br>
		Procurar por: <br><input type="text" name="palavraParaTrocar" required><br>
		Trocar por: <br><input type="text" name="palavraSubstituta" required><br>
		<input type="submit" value="Trocar"><br>
	</form><br>

	<hr>
	
	<?php 

		if(isset($_POST['texto']) && !empty($_POST['texto'])){

			$palavra = $_POST['palavraParaTrocar'];

			$texto = $_POST['texto'];

			$textoOriginal = str_replace($palavra,"<span style='color: blue'>".$palavra."</span>",$texto);

			$substituta = "<span style='color: red'>".$_POST['palavraSubstituta']."</span>";

			$textoModificado = str_replace($palavra, $substituta,$texto);

			echo $textoOriginal."<br>";

			echo $textoModificado;

		}

	?>

</body>
</html>

