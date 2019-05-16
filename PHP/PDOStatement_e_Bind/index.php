<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre PDOStatement e Bind, preparação de query SQL.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 16/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre PDOStatement e Bind, preparação de query SQL</title>
</head>
<body>

	<div class="estudoMath">
		<h1>Estudo sobre PDOStatement e Bind, preparação de query SQL</h1>
		
	<?php

		$dsn="mysql:dbname=cadastro;host=localhost"; // banco de dados e host

		$dbuser="root"; // Uuário MySQL

		$dbpass="§"; // Senha

		try{

			// Conexão com o banco de dados
			$pdo = new PDO($dsn,$dbuser,$dbpass);

			$nome="Jack";

			$id=8;

			$sql="UPDATE artigos SET nome= :novonome WHERE id= :id";

			// Preparar variável
			$sql=$pdo->prepare($sql);

			// Troca um pelo outro
			$sql->bindValue(":novonome",$nome);
			$sql->bindValue("id",$id);

			// Ezxecute a query
			$sql->execute();

			echo "Usuário atualizado!";

			

		}catch(PDOException $e){

			echo "Falhou: ".$e->getMessage();

		}

	?>

</body>
</html>

