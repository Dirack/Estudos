<!doctype html>
<!--
	copy.php (PHP)
	
	Objetivo: Estudo sobre como submeter dados de usuário em um array em PHP.
	
	Site: http://www.dirackslounge.online
	
	Versão 1.0
	
	Programador: Rodolfo Dirack 03/02/2020
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
-->
<head>
	<meta charset="utf-8">
	<title></title>
	<link type="text/css" rel="stylesheet" href=" ">
	<script type="text/javascript" src=" "></script>
</head>
<body>
<?php

?>
</body>
</html>


<?php

if(!empty($_POST["userArray"]) && isset($_POST["userArray"])){
	print_r($_POST['userArray']);
}

?>

<form method="POST">
	<input type="text" name="userArray['nome']" placeholder="Nome"><br>
	<input type="text" name="userArray['email']" placeholder="Email"><br>
	<input type="submit" value="Enviar">
</form>
