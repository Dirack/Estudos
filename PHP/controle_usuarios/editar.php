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

			if(isset($_GET['id']) && !empty($_GET['id'])){

				$id=$_GET['id'];

			}

			if(isset($_POST['usuario']) && !empty($_POST['usuario'])){

				$sql=$pdo->prepare("UPDATE controle_usuarios SET usuario= :usuario, email= :email WHERE id= :id");
				$usuario=$_POST['usuario'];
				$email=$_POST['email'];
				$sql->bindValue(':id',$id);
				$sql->bindValue(':usuario',$usuario);
				$sql->bindValue(':email',$email);
				$sql->execute();

				header('Location: index.php');
				exit;

			}

			
			
			$sql=$pdo->prepare("SELECT * FROM controle_usuarios WHERE id= :id");
			$sql->bindValue(':id',$id);
			$sql->execute();

			if($sql->rowCount() > 0){

				$usuario=$sql->fetch();

			}else{
				
				header('Location: index.php');
				exit;


			}


	?>

	<div class="estudoPHP">

		<form method="POST">
			USUARIO: <br>
			<input type="text" name="usuario" value="<?php echo $usuario['usuario'];?>"><br>
			EMAIL: <br>
			<input type="text" name="email" value="<?php echo $usuario['email']; ?>"><br>
			<input type="submit" value="Atualizar">
		</form>

	</div>

	

</body>
</html>

