<?php
/*
	index.php (PHP)
	
	Objetivo: Estudo sobre submeter formulário em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 11/03/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

// isset verifica se email foi setado e 
// empty verifica se a variável está vazia
if(isset($_POST['email']) && !empty($_POST['email'])){

	$email = $_POST['email'];

	echo "usuário enviou os dados!";
	echo "meu email: ".$email;

	// Criar registro de email em arquivo txt
	file_put_contents("./file.txt",$email,FILE_APPEND);

	// Mover para index.php
	header('Location: index.php');

}



?>

<head>
<title>Estudo sobre submeter formulário em PHP</title>
</head>

<body>

	<!-- Formulário: envie um email para obter uma resposta -->
	<hr>
	<form method="POST">
		Email:
		<input type="text" name="email"><br>

		Senha:
		<input type="text"><br>
		<input type="submit">


	</form>
</body>
