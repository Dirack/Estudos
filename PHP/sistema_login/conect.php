<?php
/*
	conect.php (PHP) 

	Objetivo: Conexão com o banco de dados da página index.php

	Programador: Rodolfo A. C. Neves (Dirack) 02/02/2019
*/

//////////// Conexão com banco de dados //////////////////
$servername = "localhost"; //servidor
$username = "root"; //usuário
$password = "§"; // Sua senha no servidor aqui
$db_name = "cadastro"; //banco de dados (database)

// Conexão com o servidor
$connect = mysqli_connect($servername, $username, $password, $db_name);

//Configurar a conexão para utf8
mysqli_query($connect, "SET NAMES 'utf8'");
mysqli_query($connect,'SET character_set_connection=utf8');
mysqli_query($connect,'SET character_set_client=utf8');
mysqli_query($connect,'SET character_set_results=utf8');

?>
