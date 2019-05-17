<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre erro de rowCount em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 17/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre erro de rowCount em PHP</title>
</head>
<body>

	<div class="estudoMath">
		<h1>Estudo sobre erro de rowCount em PHP</h1>
		
	<?php

		$dsn="mysql:dbname=cadastro;host=localhost"; // banco de dados e host

		$dbuser="root"; // Uuário MySQL

		$dbpass="§"; // Senha

		try{

			// Conexão com o banco de dados
			$pdo = new PDO($dsn,$dbuser,$dbpass);

			// Ao setar estes atributos no PDO os erros são detalhados na tela
			$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
			

		}catch(PDOException $e){

			echo "Falhou: ".$e->getMessage();

		}

		/* Como a tabela fotos não existe, nada é passado
		   para '$sql' fazendo com q o método rowCount() não exista */
		$sql="SELECT * FROM fotos";
		$sql=$pdo->query($sql);

		echo "TOTAL DE FOTOS".rowCount();
	?>

</body>
</html>

