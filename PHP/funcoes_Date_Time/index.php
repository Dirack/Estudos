<!doctype html>
<!--
	index.php (PHP)
	
	Objetivo: Estudo sobre funções de data e tempo em PHP.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 06/05/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.

-->
<head>
	<meta charset="utf-8">
	<title>Estudo sobre funções de data e tempo em PHP</title>
</head>
<body>

<?php

/* dia atual de 01-31 */
$dataAtual=date("d");

echo $dataAtual."<br>";

/* data no formato dd/mm/aaaa e hora hh:ii:ss */
$dataAtual=date("d/m/Y \à\s H:i:s");

echo $dataAtual."<br>";


?>


</body>
</html>


