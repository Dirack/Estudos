<?php
/*
	score.php (PHP) 

	Objetivo: Atualizar o score das músicas de index.html.
	Funções do script violao.js.

	Programador: Rodolfo A. C. Neves (Dirack) 04/03/2019
*/

// Recebe o repertório a ser exibido via POST
$score = $_POST["score"];
$id = $_POST['id'];

//////////// Conexão com banco de dados //////////////////
include("../conect.php");

// Se a conexão falhar, avise o usuário
if (mysqli_connect_error()):
	echo "Falha na conexão!".mysqli_connect_error();	
endif;


////////////// Consulte o banco de dados: Repertório //////////////////
$sql = "UPDATE repertorio SET score='$score' WHERE id='$id';";
$resultado = mysqli_query($connect,$sql);

echo "$score";

?>
