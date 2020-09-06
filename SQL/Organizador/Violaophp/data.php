<?php
/*
	data.php (PHP) 

	Objetivo: Atualizar a data da revisão das músicas de index.html.
	Funções do script violao.js.

	Programador: Rodolfo A. C. Neves (Dirack) 05/03/2019
*/

// Recebe a música a ser atualizada
$data = $_POST["data"];
$id = $_POST['id'];

//////////// Conexão com banco de dados //////////////////
include("../conect.php");

// Se a conexão falhar, avise o usuário
if (mysqli_connect_error()):
	echo "Falha na conexão!".mysqli_connect_error();	
endif;


////////////// Consulte o banco de dados: Repertório //////////////////
$sql = "UPDATE repertorio SET prazo='$data' WHERE id='$id';";
$resultado = mysqli_query($connect,$sql);

echo "$data";

?>
