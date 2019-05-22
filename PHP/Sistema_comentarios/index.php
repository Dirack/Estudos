<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Exercício construindo um sistema de comentários em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 22/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Exercício construindo um sistema de comentários em PHP</title>
</head>
<body>

	<?php

			//////////// Conexão com banco de dados //////////////////
			try{

				$pdo= new PDO("mysql:dbname=cadastro;host=localhost","root","§");

			}catch(PDOException $e){

				echo "ERRO: ".$e->getMessage();
				exit;

			}

			if(isset($_POST['nome']) && !empty($_POST['nome'])){

				$nome=$_POST['nome'];
				$mensagem=$_POST['mensagem'];

				$sql=$pdo->prepare("INSERT INTO comentariosTeste SET nome=:nome, mensagem=:mensagem, data=NOW()");
				$sql->bindValue(':nome',$nome);
				$sql->bindValue(':mensagem',$mensagem);
				$sql->execute() or die("erro na query");

				header('location: index.php');


			}
	?>

	<div class="estudoMath">
		<h1>Exercício construindo um sistema de comentários em PHP</h1>

		<fieldset>
			<form method="POST">
				Nome:<input type="text" name="nome"><br><br>

				Mensagem:<textarea name="mensagem"></textarea><br><br>

				<input type="submit" name="submit" value="Enviar">

			</form>
		</fieldset><br><br>

		<?php


			$query = "SELECT * FROM comentariosTeste ORDER BY data DESC";

			$query = $pdo->query($query) or die("erro na query");

			if($query->rowCount() > 0){


				foreach($query->fetchAll() as $mensagem):

					?>
					<strong><?php echo $mensagem['nome']." ".$mensagem['data'] ?></strong>

					<p><?php echo $mensagem['mensagem'] ?></p><hr>

					<?php


				endforeach;

			}else{

				echo "Não há mensagens...";

			}

	

		?>

</body>
</html>

