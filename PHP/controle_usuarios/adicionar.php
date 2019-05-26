<!doctype html>
<!--
	adicionar.php (PHP)
	
	Objetivo: Sistema de controle de usuários com PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 25/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Sistema de controle de usuários com PHP</title>
</head>
<body>

	<?php

			//////////// Conexão com banco de dados //////////////////
			include('conect.php');

			session_start();

			if(isset($_POST['usuario']) && !empty($_POST['usuario'])){

				$usuario=$_POST['usuario'];
				$email=$_POST['email'];
				$senha=md5($_POST['senha']);
				
				$sql=$pdo->prepare("INSERT INTO controle_usuarios(usuario, email, senha) VALUES(:usuario, :email, :senha)");
				$sql->bindValue(':usuario',$usuario);
				$sql->bindValue(':email',$email);
				$sql->bindValue(':senha',$senha);
				$sql->execute();

				header('Location: index.php');
				exit;

			}


	?>

	<div class="estudoPHP">

		<form method="POST">
			USUARIO: <br>
			<input type="text" name="usuario"><br>
			EMAIL: <br>
			<input type="text" name="email"><br>
			SENHA: <br>
			<input type="text" name="senha"><br>
			<input type="submit" value="Cadastrar">
		</form>

	</div>

	

</body>
</html>

