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
	<title>Área restrita a usuários</title>
</head>
<body>

	<?php

			session_start();

			//////////// Conexão com banco de dados //////////////////
			include('conect.php');

			if(!empty($_SESSION['logado'])){

				$id=$_SESSION['logado'];

				$sql="SELECT * FROM login_convite WHERE id=$id";
				echo $sql;
				$sql=$pdo->query($sql);

				if($sql->rowCount() > 0){
					$usuario=$sql->fetch();
				}
			}else{

				header('Location: login.php');
				exit;

			}
	?>

	<div class="estudoPHP">
		<h1>Área restrita a usuários</h1>

		<p>Email: <?php echo $usuario['email']; ?></p>
		<p>Link: http://localhost/login_convite/cadastrar.php?codigo=<?php echo $usuario['codigo']?></p>
		<a href="login.php">Sair</a>
		<?php unset($_SESSION['logado']); ?>

	</div>

</body>
</html>

