<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre conexão com o banco de dados em PHP utilizando PDO (Parte 2).
	
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

			// Conexão com o banco de dados
			$pdo = new PDO($dsn,$dbuser,$dbpass);

			$sql="SELECT * FROM artigos";

			$sql=$pdo->query($sql);

			// Listar a tabela artigos
			if($sql->rowCount() > 0){

				echo "HÁ usuários cadastrados!<br>";

				foreach($sql->fetchAll() as $mensagem){

					echo "Nome: ".$mensagem['nome']."<br>";

				}

			} else {

				echo "NENHUM usuário cadastrado!";

			}

			//Inserir informação no banco de dados
			$query="INSERT INTO artigos(nome,titulo) VALUES('Teste2','teste2')";

			$query=$pdo->query($query) or die('Erro na query');

			echo "Inserido com sucesso no id ".$pdo->lastInsertId();

		}catch(PDOException $e){

			echo "Falhou: ".$e->getMessage();

		}

	?>

</body>
</html>

