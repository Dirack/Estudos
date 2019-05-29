<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Formulário PHP para receber o nome do usuário e 
	depois cumprimenta-lo. Exercício do módulo de PHP intermediário
	do curso PHP profissional do professor Bonieky.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 29/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
-->
<head>
	<meta charset="utf-8">
	<title>Formulário PHP para receber o nome do usuário e depois cumprimenta-lo</title>
</head>
<body>

	<form method="POST">
		Qual o seu nome?<br>
		<input type="text" name="nomeUsuario"><br>
		<input type="submit" value="Enviar"><br><br>
	</form>

	<?php

		if(isset($_POST['nomeUsuario']) && !empty($_POST['nomeUsuario'])){

			echo "Olá, ".$_POST['nomeUsuario'];
		}

	?>



</body>
</html>

