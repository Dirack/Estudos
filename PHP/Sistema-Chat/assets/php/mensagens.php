<!doctype html>
<!--
	mensagens.html (HTML)
	
	Objetivo: Página de mensagens do chat.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 12/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
-->
<head>
	<meta charset="utf-8">
	<title>Mensagens do chat</title>
	<link type="text/css" rel="stylesheet" href="../css/mensagens.css">
</head>
<body>

	<?php

	//Usuário
	$usuario=$_GET['user'];

	//////////// Conexão com banco de dados //////////////////
	include("conect.php");

	//////////// Função de postagem de mensagens no chat //////////////////
	include("postagem.php");

	$query="SELECT * FROM chat";

	$resultado=mysqli_query($connect,$query);

	// Exiba as mensagens registradas
	if (mysqli_num_rows($resultado) > 0):
		
		
		while($linha = mysqli_fetch_array($resultado)):
	
			$autor = $linha['autor'];
			$data = $linha['data'];
			$mensagem = $linha['mensagem'];
			
			echo postagem($data,$autor,$mensagem,$usuario);	
		endwhile;


	else:

		echo "<p>$query</p>";
	endif;

	?>

<footer id='footer'></footer>
</body>
</html>

