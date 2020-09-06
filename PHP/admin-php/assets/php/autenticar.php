<?php
/*
	autenticar.php (PHP)
	
	Objetivo: Estudo sobre autenticação HTTP com PHP.
	
	Site: http://www.dirackslounge.online
	
	Versão 1.0
	
	Programador: Rodolfo Dirack 12/07/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/

$user="root";
$senha="12345";

if ((!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW'])) || ($_SERVER['PHP_AUTH_USER']!=$user || $_SERVER['PHP_AUTH_PW']!=$senha)){
	header('HTTP/1.1 401 Unauthorized');
	header('WWW-Authenticate: Basic realm="mestre dos pulos"');
	exit("<h2>Você precisa estar logado para acessar a página do ADMINISTRADOR.</h2>");
}

unset($_SERVER['PHP_AUTH_USER']);
unset($_SERVER['PHP_AUTH_PW']);
?>
