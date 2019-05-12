<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre Sessão e Cookie em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 12/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre Sessão e Cookie em PHP</title>
</head>
<body>

	<div class="estudoMath">
		<h1>Estudo sobre Sessão e Cookie em PHP</h1>
		
	<?php

		/* As variáveis de sessão ficam armazenadas 
		enquanto o navegador estiver aberto */
		/* Seção inciada */
		session_start();

		/* Armazenar informação na superglobal $_SESSION */
		$_SESSION['teste']="Rodolfo Dirack";

		echo "Meu nome é ".$_SESSION['teste']."<br>";	

		/* Criar cookie em PHP */
		/* Time fornece a hora atual em s */
		setcookie("nome","dirack",time()+3600);

		echo "Cookie: ".$_COOKIE['nome']."<br>";	


	?>

</body>
</html>

