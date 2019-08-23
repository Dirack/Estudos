<?php
include('assets/php/connect.php');

if(isset($_POST['palavra_chave']) && !empty($_POST['palavra_chave'])){

	$PALAVRA=explode(" ",$_POST['palavra_chave']);

	foreach($PALAVRA as $P){
		$LISTA[] = "titulo LIKE '%".$P."%'";
	}

	$sql = "SELECT * FROM tabela_pesquisa WHERE ";

	$sql .= implode(" OR ",$LISTA);

	$sql = $pdo->query($sql) or die('Erro na query de index.php');

	if($sql->rowcount() > 0){

		echo "Resultados: <br>";

		foreach($sql->fetchAll() as $r){
			echo "=> ".$r['titulo']."<br>";
		}

	} else {
		echo "Nenhum resultado foi encontrado!";
	}

}

?>

<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre pesquisa em Bnacos de dados com PHP e MySQL.
	
	Site: http://www.dirackslounge.online
	
	Versão 1.0
	
	Programador: Rodolfo Dirack 22/08/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre paginação e pesquisa com PHP e MySQL</title>
</head>
<body>

<h1>Tente pesquisar sobre algo no banco de dados</h1>
<h2>Insira as palavras chave separadas por espaços</h2>

	<form method="POST">
		<input type="text" name="palavra_chave">
		<input type="submit" value="Pesquisar">
	</form>

</body>
</html>















