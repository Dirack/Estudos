<?php
session_start();

if(!isset($_SESSION['captcha'])){
	$n = rand(1000,9999);
	$_SESSION['captcha'] = $n;
}

if(!empty($_POST['captcha'])){
	$c = $_POST['captcha'];

	if($c == $_SESSION['captcha']){
		echo "ACERTOU! <br>";
	} else {
		echo "ERROU! <br>";
	}

	$n = rand(1000,9999);
	$_SESSION['captcha'] = $n;
}
?>
<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Página de captcha com PHP.
	
	Site: http://www.dirackslounge.online
	
	Versão 1.0
	
	Programador: Rodolfo Dirack 13/07/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre Captcha em PHP</title>
</head>
<body>
	<form method="POST">
	E-mail:<br>
	<input type="text" name="email"><br>
	Senha:<br>
	<input type="text" name="senha"><br>
	<br>

	<img src="imagemCaptcha.php" width="100" height="50">
	<br><br>

		<input type="text" name="captcha">
		<input type="submit" value="Verificar">
	</form>
</body>
</html>
