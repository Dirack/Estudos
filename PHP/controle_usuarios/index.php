<!doctype html>
<!--
	index.php (PHP)
	
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

			$sql="SELECT * FROM controle_usuarios";
			$sql=$pdo->query($sql);


	?>

	<div class="estudoPHP">

		<a href="adicionar.php">Adicionar novo usuário</a>

		<table width="100%" border="1">
			
			<tr>
				<th>Nome</th>
				<th>Email</th>
				<th>Ações</th>
			</tr>

			<?php
				if($sql->rowCount() > 0){

					foreach($sql->fetchAll() as $usuario){

					?>

					<tr>
						<td><?php echo $usuario['usuario'];?></td>
						<td><?php echo $usuario['email']; ?></td>
						<td>
							<a href="editar.php?id=<?php echo $usuario['id']; ?>">Editar</a>
							<a href="excluir.php?id=<?php echo $usuario['id']; ?>">Excluir</a>
						</td>
					</tr>
					
					<?php
					}



				}

			?>

		</table>

	

</body>
</html>

