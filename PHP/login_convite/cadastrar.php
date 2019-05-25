<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Exercício sistema de login por convite em PHP.
	Só deixa o usuário cadastrar se o link for válido.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 24/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Cadastrar usuário</title>
</head>
<body>

	<?php

		if(!empty($_GET['codigo'])){


			//////////// Conexão com banco de dados //////////////////
			include('conect.php');

			// O link é válido?
			$codigo=$_GET['codigo'];
			$sql="SELECT * FROM login_convite WHERE codigo='$codigo'";
			$sql=$pdo->query($sql);

			if(!$sql->rowCount() > 0){
				header('Location: login.php');
				exit;
			}


			if(isset($_POST['email']) && !empty($_POST['email'])){

				$senha=md5($_POST['senha']);
				$email=$_POST['email'];
				$codigo=md5(rand(0,9999).rand(0,9999));
				$query="INSERT INTO login_convite(email,senha,codigo) VALUES('$email','$senha','$codigo')";
				$sql=$pdo->query($query) or die("Não conseguiu cadastrar usuário: $query");
			}

		}else{

			header('Location: login.php');
			exit;

		}
	?>

	<div class="estudoPHP">
		<h1>Cadastrar usuário</h1>

		<form method="POST">
			EMAIL:<br><input type="text" name="email"><br>
			SENHA:<br><input type="text" name="senha"><br>
			<input type="submit" value="Cadastrar">
		</form>

		
</body>
</html>

