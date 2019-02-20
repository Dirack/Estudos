<?php
/*
	ajax.php (PHP)
	
	Objetivo: Estudo sobre solicitação AJAX completa.
	Somar dois números enviados por uma solicitação AJAX.
	
	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 20/02/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

// intval retorna um número inteiro
$x = intval($_GET['n1']);
$y = intval($_GET['n2']);

echo $x+$y;

?>


