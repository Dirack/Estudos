<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Exercício ordenando resultados em PHP.
	Os nomes de usuários poderão ser apresentados em ordem alfabética
	e as idades poderão ser apresentadas em ordem crescente. Basta
	escolher uma das opções no botão select.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 24/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Exercício ordenando resultados em PHP</title>
</head>
<body>

	<?php

			//////////// Conexão com banco de dados //////////////////
			try{

				$pdo= new PDO("mysql:dbname=cadastro;host=localhost","root","§");

				//Configurar a conexão para utf8
				$pdo->query("SET NAMES 'utf8'");
				$pdo->query('SET character_set_connection=utf8');
				$pdo->query('SET character_set_client=utf8');
				$pdo->query('SET character_set_results=utf8');

			}catch(PDOException $e){

				echo "ERRO: ".$e->getMessage();
				exit;

			}


			if(isset($_GET['ordem']) && !empty($_GET['ordem'])){

				$ordem=addslashes($_GET['ordem']);

				$sql="SELECT * FROM projeto_ordenar ORDER BY ".$ordem;
			}else{

				$ordem='';
				$sql="SELECT * FROM projeto_ordenar";
			}
	?>

	<div class="estudoPHP">
		<h1>Exercício ordenando resultados em PHP</h1>

		<form method="GET">
			<select name="ordem" onchange="this.form.submit()">
				<option></option>
				<option value="nome" <?php echo ($ordem=="nome")?"selected='selected'":""?>>Por nome</option>
				<option value="idade" <?php echo ($ordem=="idade")?"selected='selected'":""?>>Por idade</option>
			</select>
		</form><br>

		<table border="1" width="400">
			<tr>
				<th>Nome</th>
				<th>Idade</th>
			</tr>

	<?php 
	
		$sql=$pdo->query($sql) or die("Erro na query");

		if($sql->rowCount() > 0){

			foreach($sql->fetchAll() as $usuario){

			?>

			<tr>
				<td><?php echo $usuario['nome'] ?></td>
				<td><?php echo $usuario['idade'] ?></td>
			</tr>

			<?php

			}

		}
	

	?>

	</table>

</body>
</html>

