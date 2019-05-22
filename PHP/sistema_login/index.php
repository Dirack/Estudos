<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Exercício construindo um sistema de login PHP.
	Esta é a área restrita acessível ao usuário logado.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 21/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Exercício construindo um sistema de login PHP</title>
</head>
<body>


	<div class="estudoMath">
		<h1>Exercício construindo um sistema de login PHP</h1>
		

		<?php

			//////////// Conexão com banco de dados //////////////////
			include("conect.php");

			$login=addslashes($_POST['login']);

			$senha=md5(addslashes($_POST['senha']));

			$query = "SELECT * FROM Login WHERE login='$login' AND senha='$senha'";

			$resultado = mysqli_query($connect,$query);

			// Avise se login e senha foram encontrados
			if (mysqli_num_rows($resultado) == 1){

				$statusUsuario='logado';

			}

			if(isset($statusUsuario) && (!empty($statusUsuario))){

				echo "Área restrita... Usuário logado!";

			}else{

				header('location: login.php');

			}


		?>

</body>
</html>

