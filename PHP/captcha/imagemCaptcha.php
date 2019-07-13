<?php
/*
	imagemCaptcha.php (PHP)
	
	Objetivo: Estudo sobre Captcha com PHP.
	
	Site: http://www.dirackslounge.online
	
	Versão 1.0
	
	Programador: Rodolfo Dirack 13/07/2019
	
	Email: rodolfo_profissional@hotmail.com
	
	Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/
session_start();
header("Content-type: image/jpeg");

$n = $_SESSION['captcha'];

$imagem = imagecreate(100,50);
imagecolorallocate($imagem, 200, 200, 200);

$fontcolor = imagecolorallocate($imagem, 20, 20, 20);

imagettftext($imagem, 40, 0, 20, 30, $fontcolor, __DIR__.'/Ginga.otf', $n);

imagejpeg($imagem, null, 100);

?>
