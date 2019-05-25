<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Projeto simulando um caixa eletrônico com PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 25/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Projeto simulando um caixa eletrônico com PHP</title>
</head>
<body>

	<?php

			//////////// Conexão com banco de dados //////////////////
			include('conect.php');

			session_start();

			if(isset($_SESSION['logado']) && !empty($_SESSION['logado'])){

			}else{
				header('Location: login.php');
				exit;
			}

			$id = $_SESSION['logado'];
			$sql=$pdo->prepare("SELECT * FROM caixa_eletronico WHERE id= :id");
				
				$sql->bindValue(':id',$id);
				$sql->execute();

				if($sql->rowCount() > 0){

					$sql = $sql->fetch();

				}

	?>

	<div class="estudoPHP">
		<h1>Banco Dirack</h1>

		<p>Titular: <?php echo $sql['titular']; ?></p>
		<p>Agência: <?php echo $sql['agencia']; ?></p>
		<p>Conta: <?php echo $sql['conta']; ?></p>
		<p>Saldo: <span style="color: blue;"><?php echo $sql['saldo']."R$"; ?></span></p>
		<a href="login.php">Sair</a>

	

</body>
</html>

