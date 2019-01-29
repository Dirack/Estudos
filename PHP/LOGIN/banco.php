<?php
/*
	banco.php (PHP) - Estudo banco de dados, SQL query e phpmyadmin

	Objetivo: Criar um sistema de login simples que consulte um banco de
	dados SQL para verificar o login e senha (escrito em PHP).
	
	O login e senha são enviados por um formulário html, utilizando o método
	POST. O script PHP faz a conexão com o banco de dados, e verifica login e
	senha de usuário.

	Programador: Rodolfo A. C. Neves (Dirack) 29/01/2019
*/

// Conexão com banco de dados
$servername = "localhost"; // Servidor
$username = "root"; // Usuário
$password = "************"; // Essa deve ser a senha correta do seu servidor
$db_name = "cadastro"; // Database

// login e senha obtidos do formulário
$login = $_POST["login"];
$senha = $_POST["senha"];

// Senha criptografada
$senha = md5($senha);

// Conexão com o servidor
$connect = mysqli_connect($servername, $username, $password, $db_name);

// Se a conexão falhar, avise o usuário
if (mysqli_connect_error()):
	echo "Falha na conexão!".mysqli_connect_error();
endif;

// Verifique o login. Consulte o banco de dados
$sql = "SELECT nome FROM pessoas where nome='$login'";
$resultado = mysqli_query($connect,$sql);

// Avise se o login foi encontrado
if (mysqli_num_rows($resultado) > 0):
	echo "Usuário $login encontrado!<br>";
else:
	echo "Registro NAO encontrado";
endif;

// Verifique a senha. Consulte o banco de dados
$sql = "SELECT * FROM pessoas where nome='$login' AND senha='$senha'";
$resultado = mysqli_query($connect,$sql);

// Avise se login e senha foram encontrados
if (mysqli_num_rows($resultado) == 1):
	echo "Usuário $login encontrado!";
else:
	echo "Registro NAO encontrado";
endif;


?>
