<?php
/*
	chat.php (PHP)
	
	Objetivo: Sistema de chat com HTML/CSS, Javascript e PHP.
	Script responsável por registrar as mensagens no banco de dados.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 12/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

	$data='2019-05-01 13:30:14';
	$autor=$_POST['autor'];
	$mensagem=$_POST['mensagem'];

	//echo "$data;$autor;$mensagem";

	//////////// Conexão com banco de dados //////////////////
	include("conect.php");

	$query="INSERT INTO chat(data,autor,mensagem) VALUES('$data','$autor','$mensagem')";

	$resultado=mysqli_query($connect,$query) or die("ERRo na query: $query");

	//echo "$query";

?>


