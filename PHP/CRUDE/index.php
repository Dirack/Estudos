<?php
/*
	index.php (PHP)
	
	Objetivo: Estudo sobre crude em PHP.

	Versão 1.0
	
	Site: http://www.dirackslounge.online
	
	Programador: Rodolfo A. C. Neves (Dirack) 23/06/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: Software de uso livre e código aberto.
*/

require 'connect.php';

$database = "teste123";
$host = "localhost";
$user = "root";
$password = "§";
	
$conexao = new Connect($database,$host,$user,$password);

?>
