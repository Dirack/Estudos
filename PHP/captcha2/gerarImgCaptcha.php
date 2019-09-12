<?php
/*
	 gerarImgCaptcha.php (PHP)
	 
	 Objetivo: Gerador de imagem captcha com PHP.
	 
	 Site: http://www.dirackslounge.online
	 
	 Versão 1.0
	 
	 Programador: Rodolfo Dirack 11/09/2019
	 
	 Email: rodolfo_profissional@hotmail.com
	 
	 Licença: GPL-3.0 <https://www.gnu.org/licenses/gpl-3.0.txt>.
*/
session_start();
define('CAPTCHA_WIDTH',100);
define('CAPTCHA_HEIGHT',100);
define('CAPTCHA_NUMCHARS',6);

$string="";

for($i=0;$i<CAPTCHA_NUMCHARS;$i++){
	$string .= chr(rand(97,122));
}

$_SESSION['senhaCaptcha'] = md5($string);

$img =  imagecreatetruecolor(CAPTCHA_WIDTH,CAPTCHA_HEIGHT);
$bgcolor = imagecolorallocate($img, 255, 255, 255); // branco
$graphic_color = imagecolorallocate($img, 64, 64, 64); // cinza-escuro
$text_color = imagecolorallocate($img, 0, 0, 0); // preto

imagefilledrectangle($img,0,0,100,100,$bgcolor);

for($i=0;$i<5;$i++){
	imageline($img,0,rand() % CAPTCHA_HEIGHT,rand() % CAPTCHA_WIDTH,rand() % CAPTCHA_HEIGHT,$graphic_color);
}

for($i=0;$i<50;$i++){
	imagesetpixel($img, rand() % CAPTCHA_WIDTH,rand() % CAPTCHA_HEIGHT,$graphic_color);
}

imagettftext($img, 18, 0, 5, CAPTCHA_HEIGHT - 50, $text_color, "./sewer.ttf", $string);

header("Content-type: image/png");

imagepng($img);
imagedestroy($img);
	 
	 
?>
