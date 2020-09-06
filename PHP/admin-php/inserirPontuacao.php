<!doctype html>
<!--
	inserirPontuacao.php (PHP)
	
	Objetivo: Formulário para inserir uma nova pontuação no banco de dados
	
	Site: http://www.dirackslounge.online
	
	Versão 1.0
	
	Programador: Rodolfo Dirack 13/07/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
-->
<head>
	<meta charset="utf-8">
	<title>Inserir nova pontuação</title>
</head>
<body>
<?php

if(isset($_POST['autor'])){
	echo "Pontuação enviada com sucesso, aguarde a aprovação<br>";
	echo "Autor: ".$_POST['autor']."<br>";
	echo "Pontuação: ".$_POST['pontos']."<br>";
	echo "Arquivo: ".$_POST['arquivo']."<br>";
}
?>

<h1>Inserir nova Pontuação no Ranking do Mestre dos Pulos</h1>
<form method="POST" enctype="multipart/form-data" action="assets/php/recebedor.php">
	Autor:<br><input type="text" name="autor" required><br>
	Pontuação:<br><input type="text" name="pontos" required><br>
	Imagem:<br><input type="file" name="arquivo" required><br>
	<input type="submit" value="Enviar"><br><br>
</form>

</body>
</html>
