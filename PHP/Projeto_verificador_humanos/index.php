<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Projeto verificador simples de humano em PHP.
	Uma conta aletória é exibida, o usuário informa o resultado.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 19/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Projeto verificador simples de humano em PHP</title>
</head>
<body>

	<?php

		session_start();

		$numeroAleatorio1=rand(0,10);
		$numeroAleatorio2=rand(0,10);

		$_SESSION['respostaCorreta']=$numeroAleatorio1+$numeroAleatorio2;

	?>

	<div class="estudoMath">
		<h1>Projeto verificador simples de humano em PHP</h1>
		
	<form method="POST" action="projetoVerificadorHumanos.php">
		<?php 
			echo "$numeroAleatorio1 + $numeroAleatorio2 =";
		?>
		<input type="text" name="respostaUsuario">
		<input type="submit" value="verificar">

	</form>

</body>
</html>

