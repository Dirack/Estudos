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

			session_start();
			unset($_SESSION['logado']);

			//////////// Conexão com banco de dados //////////////////
			include('conect.php');

			if(isset($_POST['agencia']) && !empty($_POST['agencia'])){

				$agencia=addslashes($_POST['agencia']);
				$conta=addslashes($_POST['conta']);
				$senha=addslashes(md5($_POST['senha']));

				$sql=$pdo->prepare("SELECT * FROM caixa_eletronico WHERE agencia= :agencia AND conta= :conta AND senha= :senha");
				
				$sql->bindValue(':agencia',$agencia);
				$sql->bindValue(':conta',$conta);
				$sql->bindValue(':senha',$senha);
				$sql->execute();

				 

				if($sql->rowCount() > 0){

					$sql = $sql->fetch();

					$_SESSION['logado']=$sql['id'];
					header('Location: index.php');

				}


			}

	?>

	<div class="estudoPHP">
		<h1>Projeto simulando um caixa eletrônico com PHP</h1>

		<form method="POST">
			AGÊNCIA:<br><input type="text" name="agencia"><br>
			CONTA: <br><input type="text" name="conta"><br>
			SENHA:<br><input type="text" name="senha"><br>
			<input type="submit" value="Entrar">
		</form>
	</div>

		
</body>
</html>

