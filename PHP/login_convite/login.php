<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Exercício sistema de login por convite em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 24/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Exercício sistema de login por convite em PHP</title>
</head>
<body>

	<?php

			//////////// Conexão com banco de dados //////////////////
			include('conect.php');

			if(isset($_POST['email']) && !empty($_POST['email'])){

				$email=$_POST['email'];
				$senha=md5($_POST['senha']);

				$sql="SELECT * FROM login_convite WHERE email='$email' AND senha='$senha'";
				//echo $sql;
				$sql=$pdo->query($sql) or die("erro na query login.php");

				 

				if($sql->rowCount() > 0){

					$usuario=$sql->fetch();

					session_start();
					$_SESSION['logado']=$usuario['id'];
					header('Location: ./index.php');
					//echo $usuario['id'];

				}


			}

	?>

	<div class="estudoPHP">
		<h1>Exercício sistema de login por convite em PHP</h1>

		<form method="POST">
			EMAIL:<br><input type="text" name="email"><br>
			SENHA:<br><input type="text" name="senha"><br>
			<input type="submit" value="Entrar">
		</form>

		
</body>
</html>

