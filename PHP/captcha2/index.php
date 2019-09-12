<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre desenvolvimento de captcha em PHP.
	
	Site: http://www.dirackslounge.online
	
	Versão 1.0
	
	Programador: Rodolfo Dirack 11/09/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre desenvolvimento de captcha em PHP</title>
</head>
<?php
	session_start();
	if(isset($_POST['senhaCaptcha']) && !empty($_POST['senhaCaptcha']) && isset($_SESSION['senhaCaptcha'])){

		if($_SESSION['senhaCaptcha'] == md5($_POST['senhaCaptcha'])){
			echo "Usuário Cadastrado com sucesso!";
		}
	}
?>
<body>

	<h1>Formulário de cadastro</h1>
	<form method="POST">
		Usuário: <input type="text" name="nome"><br>
		Email: <input type="text" name="email"><br>
		Senha: <input type="text" name="senha"><br>
		Digite os números da imagem ao lado:<br>
		<input type="text" name="senhaCaptcha">		
		<img src="gerarImgCaptcha.php" alt="Validador captcha">
		<br>
		<input type="submit" value="Cadastrar"><br>

	</form>

</body>
</html>
