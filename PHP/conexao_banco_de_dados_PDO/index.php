<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre conexão com o banco de dados em PHP utilizando PDO.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 13/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre conexão com o banco de dados em PHP utilizando PDO</title>
</head>
<body>

	<div class="estudoMath">
		<h1>Estudo sobre conexão com o banco de dados em PHP utilizando PDO</h1>
		
	<?php

		$dsn="mysql:dbname=cadastro;host=localhost"; // banco de dados e host

		$dbuser="root"; // Uuário MySQL

		$dbpass="§";	// Senha

		try{

			$pdo = new PDO($dsn,$dbuser,$dbpass);

			echo "Conexão normal!";

		}catch(PDOException $e){

			echo "Falhou: ".$e->getMessage();

		}

	?>

</body>
</html>

