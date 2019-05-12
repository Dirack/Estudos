<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre SQL injection. Irei exibir na página
	as queries que seriam enviadas caso a variável $autor fosse
	informada de determinada maneira, algumas dessas maneiras 
	possibilitariam ataques do tipo SQl injection.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 12/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre SQL injection</title>
</head>
<body>

	<div class="estudoMath">
		<h1>Estudo sobre SQL injection</h1>
		
	<?php

		/* receber o autor e procurar no banco de dados */
		// Observe as queries resultantes de informações
		// intencionalmente erradas passadas em $autor
		$autor = "' or 1=1;";

		$query = "SELECT * FROM posts WHERE autor='$autor'";

		echo $query."<br>";

		$autor = "'; DROP TABLE posts;";

		$query = "SELECT * FROM posts WHERE autor='$autor'";

		echo $query."<br>";


		/* Utilizando a função addslashes as aspas 
		são interpretadas de maneira literal */
		$autor = "' or 1=1;";
		$autor = addslashes($autor);

		$query = "SELECT * FROM posts WHERE autor='$autor'";

		echo $query."<br>";


	?>

</body>
</html>

